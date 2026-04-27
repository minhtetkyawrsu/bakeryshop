"use client";

import { useEffect, useState } from "react";
import styles from "./cart.module.css";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];

    const fixed = stored.map((item) => ({
      ...item,
      qty: Number(item.qty) || 1,
      price: Number(item.price) || 0,
    }));

    setCart(fixed);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    updateCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          total: total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
      } else {
        alert(data.error || "Error saving order");
      }
    } catch (error) {
      alert("API route not found or server error");
      console.log(error);
    }
  };

  return (
    <main className={styles.page}>
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

      <section className={styles.header}>
        <p>Your Selection</p>
        <h1>Shopping Cart</h1>
        <span>Review your items before checkout.</span>
      </section>

      <section className={styles.cartBox}>
        {cart.length === 0 ? (
          <p className={styles.empty}>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.image} alt={item.name} />

              <div className={styles.info}>
                <h3>{item.name}</h3>
                <p>Price: ${Number(item.price).toFixed(2)}</p>

                <div className={styles.qty}>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>
              </div>

              <button
                className={styles.remove}
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className={styles.total}>Total: ${total.toFixed(2)}</div>

        <button className={styles.checkoutBtn} onClick={handleCheckout}>
          Checkout
        </button>
      </section>
    </main>
  );
}