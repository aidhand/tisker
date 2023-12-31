import { getSpace } from "@/lib/prisma";
import { Suspense } from "react";

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
      <Suspense>
        <SpaceInfo id={params.id} />
      </Suspense>
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
