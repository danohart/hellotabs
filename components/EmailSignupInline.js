// components/EmailSignupInline.js
// Always-visible block placed in the homepage hero, below the fold.
import { useEmailSignup } from "../hooks/useEmailSignup";
import SignupForm from "./SignupForm";

export default function EmailSignupInline() {
  const formProps = useEmailSignup();

  return (
    <section className="w-full bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-2xl px-6 py-8 my-8">
      <SignupForm
        {...formProps}
        headline="Chicago's best drink specials. In your inbox. Free."
        subheadline="Join 500+ Chicagoans who never pay full price after 5pm."
        buttonText="Find My Happy Hour →"
        showFirstName={true}
      />
    </section>
  );
}
