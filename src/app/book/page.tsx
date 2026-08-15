import { redirect } from "next/navigation";

export default async function BookRedirect({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  redirect(error ? `/work-with-me?error=${error}` : "/work-with-me");
}
