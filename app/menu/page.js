"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const products = [
  {
    id: 1,
    name: "Chocolate Donut",
    description: "Rich chocolate glaze donut",
    category: "donut",
    image: "/images/donut1.png",
  },
  {
    id: 2,
    name: "Original Glazed",
    description: "Soft donut with sweet glazed topping",
    category: "donut",
    image: "/images/donut2.png",
  },
  {
    id: 3,
    name: "Sugar Donut",
    description: "Classic soft donut with sugar coating",
    category: "donut",
    image: "/images/donut3.png",
  },
  {
    id: 4,
    name: "Special Donut",
    description: "Premium toppings donut",
    category: "donut",
    image: "/images/donut4.png",
  },
  {
    id: 5,
    name: "Sprinkle Donut",
    description: "Donut with colorful sprinkles",
    category: "donut",
    image: "/images/donut5.png",
  },
  {
    id: 6,
    name: "Blueberry Donut",
    description: "Blueberry flavored donut",
    category: "donut",
    image: "/images/donut6.png",
  },
  {
    id: 7,
    name: "Coffee",
    description: "Fresh hot coffee",
    category: "other",
    image: "/images/coffee.png",
  },
  {
    id: 8,
    name: "Muffin",
    description: "Soft fresh baked muffin",
    category: "other",
    image: "/images/muffin.png",
  },
  {
    id: 9,
    name: "Milk",
    description: "Fresh cold milk",
    category: "other",
    image: "/images/milk.png",
  },
];

export default function MenuPage() {
  const router = useRouter();

  return (
    <main>
      <nav className={styles.navbar}>
        <h2>
          <a href="/home">Zappy Bakery</a>
        </h2>

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
          <h1>Menu</h1>
          <p>Order online 24/7. Pickup in store.</p>
          <button onClick={() => router.push("/order")}>Order Online</button>
        </div>

        <img src="/images/hero-donut.jpg" alt="Donut" />
      </section>

      <section className={styles.section}>
        <h2>Donuts</h2>

        <div className={styles.menuGrid}>
          {products
            .filter((item) => item.category === "donut")
            .map((item) => (
              <div className={styles.menuItem} key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Other Items</h2>

        <div className={styles.menuGrid}>
          {products
            .filter((item) => item.category === "other")
            .map((item) => (
              <div className={styles.menuItem} key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className={styles.specials}>
        <div className={styles.specialBox}>
          <h3>10% Off Breakfast Before 8am</h3>
          <button onClick={() => router.push("/order")}>Pre-Order</button>
        </div>

        <div className={styles.specialBoxDark}>
          <h3>$8.99 Dozen Original Glazed Donuts</h3>
          <button onClick={() => router.push("/order")}>Order Online</button>
        </div>
      </section>
    </main>
  );
}