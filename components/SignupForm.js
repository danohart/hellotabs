// components/SignupForm.js
// Shared markup used by EmailSignupInline, EmailSignupFooter, and EmailSignupPopup.
// Accepts the hook return values as props so each placement owns its own state.
import { trackEvent } from "../lib/analytics";
import { POPULAR_NEIGHBORHOODS } from "../lib/neighborhoods";

export default function SignupForm({
  email,
  setEmail,
  firstName,
  setFirstName,
  neighborhood,
  setNeighborhood,
  status,
  message,
  submit,
  headline,
  subheadline,
  buttonText,
  showFirstName = false,
  showNeighborhood = false,
  compact = false,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    trackEvent("email_signup_submit", { placement: headline });
    submit(e);
  }

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <p className="text-green-600 dark:text-green-400 font-semibold text-base">
          {message}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          No spam. Just deals. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {headline && (
        <p
          className={`font-extrabold text-center text-primary-800 dark:text-white ${
            compact ? "text-base mb-1" : "text-xl mb-2"
          }`}
        >
          {headline}
        </p>
      )}
      {subheadline && (
        <p
          className={`text-center text-gray-600 dark:text-gray-300 ${
            compact ? "text-xs mb-3" : "text-sm mb-4"
          }`}
        >
          {subheadline}
        </p>
      )}

      <div className={`flex flex-col gap-2 ${compact ? "" : "max-w-sm mx-auto"}`}>
        {showFirstName && (
          <input
            type="text"
            placeholder="First name (optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={status === "loading"}
            className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
          />
        )}
        {showNeighborhood && (
          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            disabled={status === "loading"}
            className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
          >
            <option value="">Your neighborhood (optional)</option>
            {POPULAR_NEIGHBORHOODS.map((n) => (
              <option key={n.slug} value={n.name}>{n.name}</option>
            ))}
          </select>
        )}

        <div className={`flex ${compact ? "flex-col gap-2" : "flex-row gap-2"}`}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="flex-1 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="whitespace-nowrap rounded-lg bg-purple-500 hover:bg-purple-600 dark:bg-purple-800 dark:hover:bg-purple-700 text-white font-bold px-5 py-2 text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : buttonText}
          </button>
        </div>

        {status === "error" && message && (
          <p className="text-red-500 dark:text-red-400 text-xs text-center">
            {message}
          </p>
        )}

        <p className="text-xs text-center text-gray-400 dark:text-gray-500">
          No spam. Just deals. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
