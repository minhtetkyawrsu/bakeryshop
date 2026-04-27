"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const defaultProducts = [
  {
    id: 1,
    name: "Original Glazed Donut",
    description: "Soft donut with sweet glazed topping.",
    category: "donut",
    image: "/images/donut1.png",
  },
  {
    id: 2,
    name: "Chocolate Donut",
    description: "Chocolate covered donut with rich flavor.",
    category: "donut",
    image: "/images/donut2.png",
  },
  {
    id: 3,
    name: "Strawberry Donut",
    description: "Fresh strawberry flavored donut.",
    category: "donut",
    image: "/images/donut3.npng",
  },
  {
    id: 4,
    name: "Croissant",
    description: "Buttery and crispy fresh croissant.",
    category: "other",
    image: "/images/croissant.jpg",
  },
  {
    id: 5,
    name: "Blueberry Muffin",
    description: "Soft muffin with blueberry filling.",
    category: "other",
    image: "/images/muffin.jpg",
  },
  {
    id: 6,
    name: "Iced Coffee",
    description: "Cold refreshing coffee drink.",
    category: "other",
    image: "/images/coffee.jpg",
  },
];

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else if (Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        } else {
          setProducts(defaultProducts);
        }
      })
      .catch(() => {
        setProducts(defaultProducts);
      });
  }, []);

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
            .filter((item) => item.category !== "donut")
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