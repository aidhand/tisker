import * as styles from "./spaces.css";

// TODO: Put this in a utils file/folder
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// TODO: Put this in a types file/folder
interface Space {
  id: string;
  name: string;
  desc?: string;
  tags?: string[];
}

export async function Spaces({ user }: { user: number }) {
  // Get a list based off the provided user
  await delay(500);
  const spaces: Space[] = [
    { id: "1", name: "Paediatrics", tags: ["uni"] },
    { id: "2", name: "Emergency Management", tags: ["uni"] },
    { id: "3", name: "Web Design", tags: ["work"] },
    { id: "4", name: "Gardening", tags: ["work", "hobbies"] },
    { id: "5", name: "Fitness", tags: ["health", "hobbies"] },
    { id: "6", name: "Cooking", tags: ["hobbies"] },
  ];

  return (
    <div className={styles.list.grid}>
      {spaces.map((space) => (
        <Space key={space.id} space={space} />
      ))}
    </div>
  );
}

export async function Space({ space }: { space: Space }) {
  return (
    <div className={styles.item.card}>
      <div className={styles.item.head}>
        <a href={`/spaces/${space.id}`}>
          <h2 className={styles.item.name}>{space.name}</h2>
        </a>

        <div className={styles.item.tags}>
          {space.tags?.map((tag) => (
            <a key={tag} href={`/tag/${tag}`} className={styles.item.tag}>
              {tag}
            </a>
          ))}
        </div>
      </div>
      {/*
      <div>
        <hr className="my-4" />
        <small className="text-xs mx-auto text-center block">Show more</small>
      </div>
      */}
    </div>
  );
}
