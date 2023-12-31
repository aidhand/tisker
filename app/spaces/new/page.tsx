import PageHead from "@/components/page-head";
import Link from "next/link";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <PageHead title="Create a space" description="">
        <Link href="/spaces">All spaces</Link>
      </PageHead>
    </>
  );
}
