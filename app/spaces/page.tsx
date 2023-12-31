import { getSpaces } from "@/lib/prisma";
import type { Space } from "@prisma/client";

import Link from "next/link";
import { Suspense } from "react";

import styles from "./spaces.module.css";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <div className={styles.head}>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Spaces</h1>
          <h4>Organise your projects, tasks, notes, etc</h4>
        </div>
        <div>
          <Link href="/spaces/new">Create</Link>
        </div>
      </div>

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
