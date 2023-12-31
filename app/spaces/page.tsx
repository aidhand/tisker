import { Suspense } from "react";
import Loading from "../loading";
import * as styles from "./page.css";

import { getSpaces } from "@/app/lib/prisma";
import { Space } from "@prisma/client";
import Link from "next/link";

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.head.title}>Spaces</h1>
          <h4 className={styles.head.description}>
            Organise your projects, tasks, notes, etc
          </h4>
        </div>
      </div>

      <hr className={styles.seperator} />

      <div className={styles.wrapper}>
        <Suspense fallback={<Loading />}>
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
    <div className="bg-zinc-100 dark:bg-zinc-950">
      <Link href={`/spaces/${space.id}`}>
        <div className="p-4 flex justify-between items-start">
          <h2 className="text-xl font-semibold">{space.name}</h2>
          <ul className="flex gap-4">
            <li className="px-2 py-1 bg-red-500/20">tag</li>
          </ul>
        </div>
      </Link>

      <div className="p-4"></div>
    </div>
  );
}
