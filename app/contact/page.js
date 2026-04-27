"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message saved!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <main>
      {/* NAVBAR */}
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

      {/* HERO */}
      <section className={styles.hero}>
        <div>
          <p className={styles.small}>Get In Touch</p>
          <h1>Contact Us</h1>
          <p>
            Have questions about orders, catering, or custom donuts?
            Send us a message.
          </p>
        </div>

        <img src="/images/contact-hero.jpg" alt="Contact Donuts" />
      </section>

      {/* CONTACT + FORM */}
      <section className={styles.contactSection}>
        <div className={styles.info}>
          <h2>Visit Our Shop</h2>

          <div>
            <h3>Address</h3>
            <p>
              Lak Hok, Mueang Pathum Thani District,<br />
              Pathum Thani 12000
            </p>
          </div>

          <div>
            <h3>Hours</h3>
            <p>
              Monday - Sunday
              <br />
              7:00 AM - 8:00 PM
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: zappy@bakeryshop.com
            </p>
          </div>
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
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
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

      {/* MAP */}
      <section className={styles.mapBox}>
        <h2>Find Us</h2>

        <div className={styles.mapPlaceholder}>
          <iframe
            src="https://www.google.com/maps?q=5+เอกเจริญ+5+ซอย+ตำบล+หลักหก+Pathum+Thani&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "18px" }}
            loading="lazy"
          ></iframe>

          {/* 🔥 OPEN MAP BUTTON */}
          <a
            className={styles.mapButton}
            href="https://www.google.com/maps/search/?api=1&query=5+เอกเจริญ+5+ซอย+ตำบล+หลักหก+Lak+Hok+Mueang+Pathum+Thani+District+Pathum+Thani+12000"
            target="_blank"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <h3>Donut Shop</h3>
        <p>Fresh donuts, coffee, and sweet treats every day.</p>
      </footer>
    </main>
  );
}