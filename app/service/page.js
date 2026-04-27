"use client";

import { useState } from "react";
import styles from "./service.module.css";

export default function Service() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("/api/event-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Event request submitted!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong");
    }
  };

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
          <h1>Event Catering</h1>
          <p>
            Fresh donuts, coffee, and sweets for weddings, birthdays,
            and company events.
          </p>
        </div>

        <img src="/images/service-hero.jpg" alt="Catering" />
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/images/wedding.jpg" alt="Wedding" />
            <h3>Weddings</h3>
            <p>Sweet donut catering for your special day.</p>
            <span>$600+</span>
          </div>

          <div className={styles.card}>
            <img src="/images/birthday.jpg" alt="Birthday" />
            <h3>Birthdays</h3>
            <p>Perfect donuts and desserts for parties.</p>
            <span>$100+</span>
          </div>

          <div className={styles.card}>
            <img src="/images/corporate.jpg" alt="Corporate" />
            <h3>Corporate Events</h3>
            <p>Fresh treats for meetings and events.</p>
            <span>$200+</span>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div>
          <h2>Plan an Event</h2>
          <p>Tell us about your event and we will contact you.</p>
        </div>

        <form className={styles.form}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqGrid}>
          <div>
            <h3>Do you cater weddings?</h3>
            <p>Yes, we provide full catering service.</p>
          </div>

          <div>
            <h3>Can I pre-order?</h3>
            <p>Yes, you can order anytime.</p>
          </div>

          <div>
            <h3>Do you deliver?</h3>
            <p>Delivery available for large orders.</p>
          </div>

          <div>
            <h3>Custom donuts?</h3>
            <p>Yes, we offer custom designs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}