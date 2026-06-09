import { useState } from "react";

const REPORT_TYPES = [
  { value: "place_closed", label: "Place is permanently closed" },
  { value: "deal_unavailable", label: "Deal is no longer available" },
  { value: "wrong_info", label: "Wrong information (address, hours, etc.)" },
  { value: "other", label: "Other" },
];

export default function ReportIssueModal({ isOpen, onClose, placeId, placeName }) {
  const [reportType, setReportType] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setReportType("");
    setMessage("");
    setSubmitting(false);
    setSubmitted(false);
    setError("");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reportType) {
      setError("Please select a report type.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          placeId,
          reportType,
          message,
          website: e.target.website.value, // honeypot
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setError("You've already reported this listing recently. Try again later.");
        setSubmitting(false);
        return;
      }

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />
      <div className="relative bg-white dark:bg-slate-700 rounded-lg shadow-xl w-full max-w-md p-6">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        <h2
          id="report-modal-title"
          className="text-lg font-bold mb-1 dark:text-slate-100"
        >
          Report an issue
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">
          {placeName}
        </p>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-green-600 dark:text-green-400 font-semibold mb-1">
              Thanks for the heads up!
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              We&apos;ll review it soon.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot — must stay hidden without using Tailwind 'hidden' class */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", opacity: 0 }}
            />

            <fieldset className="mb-4">
              <legend className="text-sm font-semibold mb-2 dark:text-slate-200">
                What&apos;s wrong?
              </legend>
              <div className="space-y-2">
                {REPORT_TYPES.map(({ value, label }) => (
                  <label
                    key={value}
                    className="flex items-center gap-2 cursor-pointer text-sm dark:text-slate-300"
                  >
                    <input
                      type="radio"
                      name="reportType"
                      value={value}
                      checked={reportType === value}
                      onChange={() => setReportType(value)}
                      className="accent-purple-600"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mb-4">
              <label
                htmlFor="report-message"
                className="block text-sm font-semibold mb-1 dark:text-slate-200"
              >
                Additional details{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea
                id="report-message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                rows={3}
                placeholder="Anything else we should know?"
                className="w-full border border-gray-300 dark:border-slate-500 rounded px-3 py-2 text-sm bg-white dark:bg-slate-600 dark:text-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <p className="text-xs text-gray-400 text-right mt-0.5">
                {message.length}/500
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400 mb-3">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm text-gray-500 dark:text-slate-300 hover:text-gray-700 dark:hover:text-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Submit report"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
