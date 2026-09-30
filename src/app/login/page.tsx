import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { logIn } from "@/app/auth-actions";

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  if (await auth()) redirect("/dashboard");
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">PR Lab</p>
        <h1 className="mt-2 text-3xl font-bold">Log in</h1>
      </div>
      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">Invalid email or password.</p>}
      <form action={logIn} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium">Email
          <input name="email" type="email" autoComplete="email" required className="rounded-lg border border-zinc-300 px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">Password
          <input name="password" type="password" autoComplete="current-password" required className="rounded-lg border border-zinc-300 px-3 py-2" />
        </label>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 font-semibold text-white">Log in</button>
      </form>
      <p className="text-sm text-zinc-600">New here? <Link className="font-semibold underline" href="/signup">Create an account</Link></p>
    </main>
  );
}
