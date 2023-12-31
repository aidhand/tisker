import * as styles from "./header.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <a href="/spaces">Spaces</a>
          <a href="">Calendar</a>
          <a href="">Contacts</a>
          <a href="">Recent</a>
        </div>

        <div className={styles.section}>
          <div>
            <button className={styles.create.button}>Create</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className={styles.search.input}
            />
          </div>
        </div>
        <div className={styles.section}>
          <a href="/user">Aidhan</a>
        </div>
      </div>
    </header>
  );
}
