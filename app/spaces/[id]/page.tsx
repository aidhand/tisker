import PageHead from "@/components/page-head";
import { getSpace } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export const runtime = "edge";
export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <>
      <PageHead title="Create a space" description="">
        <Link href="/spaces">All spaces</Link>
      </PageHead>
      <div>
        <Suspense>
          <SpaceInfo id={params.id} />
        </Suspense>
      </div>
    </>
  );
}

async function SpaceInfo({ id }: { id: string }) {
  const space = await getSpace(id);

  return (
    <div>
      <pre>{JSON.stringify(space, null, "\t")}</pre>
    </div>
  );
}
