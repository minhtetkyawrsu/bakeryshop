import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Zappy Bakery</h1>
        <p>Fresh donuts, drinks, and bakery treats.</p>

        <Link href="/menu">
          <button>View Menu</button>
        </Link>
      </section>
    </main>
  );
}