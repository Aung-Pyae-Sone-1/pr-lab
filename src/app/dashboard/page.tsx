import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { logOut } from "@/app/auth-actions";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { name: true, email: true },
  });
  if (!user) redirect("/login");

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-12">
      <header className="flex items-center justify-between gap-4">
        <span className="font-semibold">PR Lab</span>
        <form action={logOut}><button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium">Log out</button></form>
      </header>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-zinc-600">Welcome, {user.name ?? user.email}.</p>
      </div>
    </main>
  );
}
