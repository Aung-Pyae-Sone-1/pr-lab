import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { signUp } from "@/app/auth-actions";

const messages: Record<string, string> = {
  details: "Enter a valid name and email address.",
  password: "Use a password of at least 12 characters and at most 72 UTF-8 bytes.",
  exists: "An account with this email already exists. Try logging in.",
};

export default async function SignupPage({ searchParams }: PageProps<"/signup">) {
  if (await auth()) redirect("/dashboard");
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">PR Lab</p>
        <h1 className="mt-2 text-3xl font-bold">Create an account</h1>
      </div>
      {typeof error === "string" && messages[error] && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{messages[error]}</p>}
      <form action={signUp} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium">Name
          <input name="name" type="text" autoComplete="name" maxLength={100} required className="rounded-lg border border-zinc-300 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">Email
          <input name="email" type="email" autoComplete="email" maxLength={254} required className="rounded-lg border border-zinc-300 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">Password <span className="font-normal text-zinc-500">(12 characters minimum)</span>
          <input name="password" type="password" autoComplete="new-password" minLength={12} maxLength={72} required className="rounded-lg border border-zinc-300 px-3 py-2" />
        </label>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 font-semibold text-white">Sign up</button>
      </form>
      <p className="text-sm text-zinc-600">Already have an account? <Link className="font-semibold underline" href="/login">Log in</Link></p>
    </main>
  );
}
