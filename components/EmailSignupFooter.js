// components/EmailSignupFooter.js
// Compact signup bar rendered inside Footer.js on every page.
import { useEmailSignup } from "../hooks/useEmailSignup";
import { useSignupCookie } from "../hooks/useSignupCookie";
import SignupForm from "./SignupForm";

export default function EmailSignupFooter() {
  const { hasSigned } = useSignupCookie();
  const formProps = useEmailSignup();

  if (hasSigned) return null;

  return (
    <div className="w-full border-t border-gray-200 dark:border-slate-700 pt-8 mb-6">
      <SignupForm
        {...formProps}
        headline="Get Today's Best Happy Hour Deals — Free"
        subheadline="Join 500+ Chicagoans who never pay full price after 5pm."
        buttonText="Send Me the Deals"
        compact={true}
      />
    </div>
  );
}
