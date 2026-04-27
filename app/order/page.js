"use client";

import { useState } from "react";
import styles from "./order.module.css";

const items = [
  ["donut1.png", "Chocolate Donut", "$2.50"],
  ["donut2.png", "Original Glazed", "$2.00"],
  ["donut3.png", "Sugar Donut", "$2.25"],
  ["donut4.png", "Specialty Donut", "$3.50"],
  ["donut5.png", "Sprinkle Donut", "$3.50"],
  ["donut6.png", "Blueberry Donuts", "$3.50"],
  ["coffee.png", "Coffee", "$3.00"],
  ["muffin.png", "Muffin", "$2.75"],
  ["milk.png", "Milk", "$1.25"],
];

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pickup_time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePickupSubmit = async () => {
    if (!form.name || !form.email || !form.pickup_time) {
      alert("Please fill name, email, and pickup time");
      return;
    }

    try {
      const res = await fetch("/api/pickup-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Pickup order saved!");

        setForm({
          name: "",
          email: "",
          pickup_time: "",
          notes: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <main>
      {/* NAVBAR */}
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

      {/* HERO */}
      <section className={styles.hero}>
        <div>
          <p className={styles.small}>Online Ordering</p>
          <h1>Order Online</h1>
          <p>Choose your favorite donuts, coffee, and bakery treats.</p>
        </div>

        <img src="/images/order-hero.jpg" alt="Order donuts" />
      </section>

      {/* ITEMS */}
      <section className={styles.orderSection}>
        <h2>Choose Your Items</h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={`/images/${item[0]}`} alt={item[1]} />
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>

              <button
                onClick={() => {
                  const cart =
                    JSON.parse(localStorage.getItem("cart")) || [];

                  const existing = cart.find((p) => p.name === item[1]);

                  if (existing) {
                    existing.quantity += 1;
                  } else {
                    cart.push({
                      id: index + 1,
                      name: item[1],
                      price: parseFloat(item[2].replace("$", "")),
                      image: `/images/${item[0]}`,
                      quantity: 1,
                    });
                  }

                  localStorage.setItem("cart", JSON.stringify(cart));

                  alert("Added to cart");
                }}
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKOUT */}
      <section className={styles.checkout}>
        <div>
          <h2>Pickup Details</h2>
          <p>Fill in your details and we’ll prepare your order.</p>
        </div>

        <form className={styles.form}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="pickup_time"
            type="text"
            placeholder="Pickup Time"
            value={form.pickup_time}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Order Notes"
            value={form.notes}
            onChange={handleChange}
          ></textarea>

          <button type="button" onClick={handlePickupSubmit}>
            Place Order
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <h3>Thank You For Ordering</h3>
        <p>Your fresh donuts will be ready soon.</p>
      </footer>
    </main>
  );
}