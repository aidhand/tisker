import { Suspense } from "react";
import * as styles from "./page.css";
import { Spaces } from "./spaces";

export default async function Page() {
  return (
    <>
      <div className={styles.head}>
        <div>
          <h1 className={styles.title}>Spaces</h1>
          <h4 className={styles.descriptor}>
            Organise your projects, tasks, notes, etc
          </h4>
        </div>

        {/* TODO: Move these below the fold */}
        <div className={styles.aside}>
          <div>
            <input
              type="text"
              name="filter"
              placeholder="Filter"
              className="p-2 w-48 bg-inherit border border-zinc-300 dark:border-zinc-700 rounded-md"
            />
          </div>

          <div>
            <select
              name="tags"
              className="p-2 w-40 bg-inherit border border-zinc-300 dark:border-zinc-700 rounded-md"
            >
              <option value="all">All</option>
              <option value="work">Work</option>
              <option value="university">University</option>
              <option value="hobbies">Hobbies</option>
              <option value="health">Health</option>
            </select>
          </div>

          <div>
            <select
              name="sort"
              className="p-2 w-32 bg-inherit border border-zinc-300 dark:border-zinc-700 rounded-md"
            >
              <option value="recent">Recent</option>
              <option value="new-to-old">New to old</option>
              <option value="old-to-new">Old to new</option>
              <option value="alpha-a-z">Alphabetical (A-Z)</option>
              <option value="alpha-z-a">Alphabetical (Z-A)</option>
              <option value="custom-sorting">Custom sorting</option>
            </select>
          </div>
        </div>
      </div>
      <hr className={styles.seperator} />
      <div>
        <Suspense>
          <Spaces user={1} />
        </Suspense>
      </div>
    </>
  );
}
