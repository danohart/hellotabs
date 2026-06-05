<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your hellotabs Next.js (Pages Router) app. PostHog is initialized in `pages/_app.js` and runs alongside the existing Google Analytics setup via a shared `lib/analytics.js` wrapper — every `trackEvent()` call now fires both GA and PostHog automatically, so all 14 pre-existing events gained PostHog coverage with zero changes to their call sites. Four new events were added for key moments that weren't tracked before. Users are identified by email address on successful signup via `posthog.identify()`. Server-side email subscription events are tracked from the Mailchimp API route using `posthog-node`. A reverse proxy (`/ingest/*`) routes PostHog traffic through your own domain to improve event delivery.

## Files changed

| File | Change |
|------|--------|
| `pages/_app.js` | Initialize `posthog.init()` on mount; import posthog |
| `lib/analytics.js` | Forward all `trackEvent()` calls to `posthog.capture()` alongside gtag |
| `hooks/useEmailSignup.js` | Call `posthog.identify(email)` on successful signup |
| `pages/neighborhood/[neighborhood].js` | Fire `neighborhood_viewed` on mount |
| `pages/place/[id].js` | Fire `place_viewed` on mount |
| `pages/api/subscribe.js` | Server-side `email_subscription_completed` / `email_subscription_failed` |
| `lib/posthog-server.js` | New — singleton `posthog-node` client for API routes |
| `next.config.js` | Add `/ingest/*` reverse proxy rewrites + `skipTrailingSlashRedirect` |
| `.env.local` | `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` |

## Events

| Event | Description | File |
|-------|-------------|------|
| `home_page_load` | Home page loaded with deal data available | `pages/index.js` |
| `load_more` | User clicks 'See More' to load more places | `pages/index.js` |
| `deal_filter_change` | User changes deal type filter (all/drinks/food) | `pages/index.js` |
| `location_button_clicked` | User clicks 'Show deals near me' | `pages/index.js` |
| `location_granted` | Browser geolocation permission granted | `pages/index.js` |
| `location_denied` | Browser geolocation permission denied | `pages/index.js` |
| `location_auto_used` | Previously-granted geolocation used silently on load | `pages/index.js` |
| `place_detail_view` | User clicks a place name to navigate to its detail page | `components/Place.js` |
| `maps_click` | User clicks address to open Google Maps | `components/Place.js` |
| `similar_place_click` | User clicks a similar place recommendation | `components/SimilarPlaces.js` |
| `search` | User submits a search query | `components/SearchBar.js` |
| `email_signup_submit` | User submits the email signup form | `components/SignupForm.js` |
| `email_popup_shown` | Email signup popup becomes visible (scroll trigger) | `components/EmailSignupPopup.js` |
| `email_popup_dismissed` | User dismisses the email signup popup | `components/EmailSignupPopup.js` |
| `neighborhood_viewed` ✨ | User views a neighborhood page | `pages/neighborhood/[neighborhood].js` |
| `place_viewed` ✨ | User lands on a place detail page | `pages/place/[id].js` |
| `email_subscription_completed` ✨ | Mailchimp subscription succeeded (server-side) | `pages/api/subscribe.js` |
| `email_subscription_failed` ✨ | Mailchimp subscription failed (server-side) | `pages/api/subscribe.js` |

✨ = newly added event

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/455947/dashboard/1674496)
- [Email Signup Funnel (wizard)](https://us.posthog.com/project/455947/insights/JCwkxioq) — form submit → confirmed subscription conversion rate
- [Email Subscriptions Over Time (wizard)](https://us.posthog.com/project/455947/insights/oxtE7tsB) — daily new subscribers bar chart
- [Place Engagement (wizard)](https://us.posthog.com/project/455947/insights/kbark12J) — place views vs Google Maps clicks
- [Search Usage (wizard)](https://us.posthog.com/project/455947/insights/S7Et6esg) — total searches and unique searchers per day
- [Location Permission Conversion (wizard)](https://us.posthog.com/project/455947/insights/ibyqKDMc) — location button clicks → permission granted funnel

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-pages-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
