import { getSpaces } from "@/lib/prisma";
import type { Space } from "@prisma/client";

import Link from "next/link";
import { Suspense } from "react";

import PageHead from "@/components/page-head";
import styles from "./spaces.module.css";

export const runtime = "edge";
export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <PageHead
        title="Spaces"
        description="It could be a workplace, hobby, or class. Spaces help you stay organised."
      >
        <Link href="/spaces/new">New Space</Link>
      </PageHead>

      <hr className={styles.seperator} />

      <div className={styles.body}>
        <Suspense>
          <List />
        </Suspense>
      </div>
    </>
  );
}

async function List() {
  // Get a list of spaces for this user
  const spaces = await getSpaces("me@aidhan.net");

  return (
    <div className={styles.list}>
      {spaces.map((space, index) => (
        <Item key={index} space={space} />
      ))}
    </div>
  );
}

async function Item({ space }: { space: Space }) {
  return (
    <div className={styles.item}>
      <div className="flex items-center justify-between">
        <Link href={`/spaces/${space.id}`}>
          <h2 className="text-xl font-semibold">{space.name}</h2>
        </Link>

        <nav className="flex">
          <Link href={`/tags/`} className="tag bg-green/20">
            tag
          </Link>
        </nav>
      </div>

      <div className="p-4"></div>
    </div>
  );
}
