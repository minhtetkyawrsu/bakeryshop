"use client";

import { useRouter } from "next/navigation";
import styles from "./home.module.css";

export default function HomePage() {
  const router = useRouter();

  return (
    <main>
      <nav className={styles.navbar}>
        <h2><a href="/home">Zappy Bakery</a></h2>
        <div>
          <a href="/home">Home</a>
          <a href="/menu">Menu</a>
          <a href="/order">Order</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div>
          <p className={styles.small}>Freshly Made Every Morning</p>

          <h1>
            Donuts &<br />
            Coffee
          </h1>

          <p className={styles.desc}>
            Sweet donuts, hot coffee, and fresh bakery treats made daily.
          </p>

          <button onClick={() => router.push("/order")}>
            Order Online
          </button>
        </div>

        <img src="/images/home-hero.jpg" alt="Donuts" />
      </section>

      <section className={styles.about}>
        <img src="/images/about-donut.jpg" alt="Bakery" />

        <div>
          <p className={styles.small}>About Us</p>
          <h2>Made Fresh Daily</h2>
          <p>
            We bake fresh donuts every morning with sweet toppings, soft dough,
            and fresh ingredients.
          </p>

          <button onClick={() => router.push("/menu")}>
            View Menu
          </button>
        </div>
      </section>

      <section className={styles.popular}>
        <p className={styles.small}>Our Favorites</p>
        <h2>Popular Donuts</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/images/donut1.png" alt="Chocolate Donut" />
            <h3>Chocolate Donut</h3>
            <p>$2.50</p>
          </div>

          <div className={styles.card}>
            <img src="/images/donut2.png" alt="Original Glazed" />
            <h3>Original Glazed</h3>
            <p>$2.00</p>
          </div>

          <div className={styles.card}>
            <img src="/images/donut3.png" alt="Sugar Donut" />
            <h3>Sugar Donut</h3>
            <p>$2.25</p>
          </div>
        </div>
      </section>
    </main>
  );
}