import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <SignUp />
    </div>
  );
}
