import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">PR Lab</p>
      <h1 className="text-4xl font-bold">Welcome to PR Lab</h1>
      <p className="max-w-xl text-zinc-600">Create an account or log in to reach your dashboard.</p>
      <div className="flex gap-3">
        <Link className="rounded-lg bg-zinc-900 px-5 py-3 font-semibold text-white" href="/signup">Sign up</Link>
        <Link className="rounded-lg border border-zinc-300 px-5 py-3 font-semibold" href="/login">Log in</Link>
      </div>
    </main>
  );
}
