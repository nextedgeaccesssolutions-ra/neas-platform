import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Link } from "wouter";

const STAFF_ROLES = ["editor", "reviewer", "publisher", "admin"];

export default function Login() {
  const { user, loading } = useAuth();
  const isStaff = Boolean(user && STAFF_ROLES.includes(user.role));

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#071D29] px-6 text-[#F5F1E8]">
        <p role="status" aria-live="polite" className="text-sm text-[#EBC07E]">Checking your NEAS session…</p>
      </main>
    );
  }

  if (isStaff) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#071D29] px-6 text-center text-[#F5F1E8]">
        <section className="w-full max-w-md rounded-2xl border border-[#CA9332]/30 bg-[#0D2B38] p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold">You are already signed in</h1>
          <p className="mt-3 text-sm leading-6 text-[#D7E1E2]">Your NEAS staff session is active.</p>
          <Link href="/admin" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#CA9332] px-6 font-semibold text-[#071D29] hover:bg-[#EBC07E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC07E]">
            Open NEAS workspace
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#071D29] px-5 py-12 text-[#F5F1E8]">
      <section className="w-full max-w-md rounded-2xl border border-[#CA9332]/30 bg-[#0D2B38] p-7 shadow-2xl sm:p-9">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#CA9332]/50 bg-[#071D29]">
          <span className="text-xl font-bold tracking-widest text-[#EBC07E]" aria-hidden="true">NEAS</span>
        </div>
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#EBC07E]">NextEdge Access Solutions</p>
        <h1 className="mt-3 text-center text-3xl font-semibold tracking-tight">Secure platform sign-in</h1>
        <p className="mt-3 text-center text-sm leading-6 text-[#D7E1E2]">
          Sign in with your approved NEAS identity-provider account to access the staff workspace.
        </p>
        <button
          type="button"
          onClick={() => startLogin()}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#CA9332] px-5 font-semibold text-[#071D29] transition-colors hover:bg-[#EBC07E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBC07E]"
        >
          Continue to secure sign-in
        </button>
        <div className="mt-6 rounded-lg border border-white/10 bg-[#071D29]/70 p-4 text-sm leading-6 text-[#D7E1E2]">
          <p className="font-semibold text-[#F5F1E8]">Account assistance</p>
          <p className="mt-1">Password recovery and account activation are managed by the configured identity provider. If you cannot access those options, contact your NEAS administrator.</p>
        </div>
        <p className="mt-7 text-center text-xs text-[#9FB2B8]">
          Access is limited to authorized NEAS staff. <Link href="/" className="text-[#EBC07E] underline underline-offset-4 hover:text-white">Return to public website</Link>
        </p>
      </section>
    </main>
  );
}
