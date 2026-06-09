import { useState } from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import { useAuthContext } from "../_app";
import AuthModal from "../../components/AuthModal";
import { connectToDatabase } from "../../lib/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const reports = await db
    .collection("reports")
    .find({ status: { $in: ["pending", "auto_flagged"] } })
    .sort({ createdAt: -1 })
    .toArray();

  return {
    props: {
      initialReports: JSON.parse(JSON.stringify(reports)),
    },
  };
}

const REPORT_TYPE_LABELS = {
  place_closed: "Place is closed",
  deal_unavailable: "Deal no longer available",
  wrong_info: "Wrong information",
  other: "Other",
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function groupByPlace(reports) {
  const groups = {};
  for (const report of reports) {
    const key = report.placeId;
    if (!groups[key]) {
      groups[key] = {
        placeId: key,
        placeName: report.placeName,
        placeSlug: report.placeSlug,
        reports: [],
      };
    }
    groups[key].reports.push(report);
  }
  return Object.values(groups);
}

function ReportCard({ report, token, onActionComplete }) {
  const [actioning, setActioning] = useState(false);
  const [selectedEventIndexes, setSelectedEventIndexes] = useState(null); // null = all
  const [reviewNote, setReviewNote] = useState("");
  const [error, setError] = useState("");

  const isDealReport = report.reportType === "deal_unavailable";
  const isManualReview =
    report.reportType === "wrong_info" || report.reportType === "other";

  async function handleAction(action) {
    setActioning(true);
    setError("");
    try {
      const res = await fetch(`/api/reports/${report._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          action,
          reviewNote: reviewNote || undefined,
          eventIndexes: isDealReport ? selectedEventIndexes : undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        onActionComplete(report._id);
      } else {
        setError(data.error || "Action failed");
        setActioning(false);
      }
    } catch {
      setError("Network error");
      setActioning(false);
    }
  }

  return (
    <div
      className={`border rounded p-4 bg-white dark:bg-slate-700 ${
        report.status === "auto_flagged"
          ? "border-orange-300 dark:border-orange-600"
          : "border-gray-200 dark:border-slate-600"
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 mr-2">
            {REPORT_TYPE_LABELS[report.reportType] || report.reportType}
          </span>
          {report.status === "auto_flagged" && (
            <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
              High volume
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 dark:text-slate-500 shrink-0">
          {timeAgo(report.createdAt)}
        </span>
      </div>

      {report.message && (
        <p className="text-sm text-gray-700 dark:text-slate-300 mb-3 italic">
          &ldquo;{report.message}&rdquo;
        </p>
      )}

      {isDealReport && (
        <div className="mb-3">
          <label className="block text-xs font-semibold mb-1 dark:text-slate-300">
            Which event to remove on approve:
          </label>
          <select
            value={selectedEventIndexes === null ? "__all__" : String(selectedEventIndexes[0])}
            onChange={(e) => {
              const val = e.target.value;
              setSelectedEventIndexes(val === "__all__" ? null : [parseInt(val)]);
            }}
            className="text-sm border border-gray-300 dark:border-slate-500 rounded px-2 py-1 bg-white dark:bg-slate-600 dark:text-slate-200"
          >
            <option value="__all__">All events</option>
          </select>
          <p className="text-xs text-gray-400 mt-1">
            To remove a specific event, view the listing and use the edit modal.
          </p>
        </div>
      )}

      {isManualReview && (
        <div className="mb-3">
          <Link
            href={`/place/${report.placeSlug || report.placeId}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-purple-600 dark:text-purple-400 underline hover:text-purple-800"
          >
            Open listing to edit manually &rarr;
          </Link>
          <p className="text-xs text-gray-400 mt-1">
            Approving will only mark this report as reviewed — no automatic changes.
          </p>
        </div>
      )}

      <div className="mb-3">
        <input
          type="text"
          value={reviewNote}
          onChange={(e) => setReviewNote(e.target.value)}
          placeholder="Review note (optional)"
          className="w-full text-sm border border-gray-200 dark:border-slate-600 rounded px-3 py-1.5 bg-white dark:bg-slate-600 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-purple-400"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 mb-2">{error}</p>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => handleAction("approve")}
          disabled={actioning}
          className="px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700 disabled:opacity-50"
        >
          {actioning ? "…" : "Approve"}
        </button>
        <button
          onClick={() => handleAction("deny")}
          disabled={actioning}
          className="px-3 py-1.5 bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-200 text-sm rounded hover:bg-gray-300 dark:hover:bg-slate-500 disabled:opacity-50"
        >
          {actioning ? "…" : "Deny"}
        </button>
      </div>
    </div>
  );
}

export default function AdminReports({ initialReports }) {
  const { isAuthenticated, login, token } = useAuthContext();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [reports, setReports] = useState(initialReports);

  const handleLogin = async (password) => {
    const result = await login(password);
    if (result.success) setShowAuthModal(false);
    return result;
  };

  const handleActionComplete = (reportId) => {
    setReports((prev) => prev.filter((r) => r._id !== reportId));
  };

  if (!isAuthenticated) {
    return (
      <>
        <Meta title="Admin — Reports" />
        <Header />
        <div className="flex flex-col items-center mt-20">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You must be logged in to view this page.
          </p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
          >
            Log In
          </button>
        </div>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      </>
    );
  }

  const grouped = groupByPlace(reports);
  const autoFlaggedCount = reports.filter(
    (r) => r.status === "auto_flagged"
  ).length;

  return (
    <>
      <Meta title="Admin — Reports" />
      <Header />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-baseline justify-between mb-1">
            <h1 className="text-2xl font-bold dark:text-slate-100">
              Listing Reports
            </h1>
            <div className="text-sm text-gray-400 space-x-3">
              <Link
                href="/admin/add"
                className="hover:underline text-purple-500"
              >
                Add
              </Link>
              <Link
                href="/admin/stale"
                className="hover:underline text-purple-500"
              >
                Stale
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
            {reports.length} report{reports.length !== 1 ? "s" : ""} pending
            review
          </p>

          {autoFlaggedCount > 0 && (
            <div className="mb-4 px-3 py-2 rounded bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 text-sm text-orange-700 dark:text-orange-300">
              {autoFlaggedCount} report
              {autoFlaggedCount !== 1 ? "s are" : " is"} auto-flagged for high
              volume on a single listing.
            </div>
          )}

          {grouped.length === 0 ? (
            <p className="text-gray-400 dark:text-slate-500 mt-8 text-center">
              No reports pending.
            </p>
          ) : (
            <div className="space-y-8">
              {grouped.map((group) => (
                <div key={group.placeId}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <Link
                      href={`/place/${group.placeSlug || group.placeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      {group.placeName}
                    </Link>
                    <span className="text-xs text-gray-400">
                      {group.reports.length} report
                      {group.reports.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {group.reports.map((report) => (
                      <ReportCard
                        key={report._id}
                        report={report}
                        token={token}
                        onActionComplete={handleActionComplete}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
