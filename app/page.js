import styles from "./page.module.css";

const donuts = [
  ["donut1.png", "Chocolate Donuts"],
  ["donut2.png", "Original Glazed"],
  ["donut3.png", "Sugar Donut"],
  ["donut4.png", "Specialty Donuts"],
  ["donut5.png", "Sprinkle Donut"],
  ["donut6.png", "Blueberry Donut"],
];

const others = [
  ["coffee.png", "Local Roasted Coffee"],
  ["milk.png", "Milk"],
  ["muffin.png", "Muffins"],
];

export default function Home() {
  return (
    <main>
      <nav className={styles.navbar}>
        <h2>Zappy Bakery</h2>
        <div>
          <a href="/home">Home</a>
          <a href="/menu">Menu</a>
          <a href="/order">Order</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div>
          <h1>Menu</h1>
          <p>Order online 24/7. Pickup in store.</p>
          <button>Order Online</button>
        </div>
        <img src="/images/hero-donut.png" alt="Donut" />
      </section>

      <section className={styles.section}>
        <h2>Donuts</h2>
        <div className={styles.menuGrid}>
          {donuts.map((item, index) => (
            <div className={styles.menuItem} key={index}>
              <img src={`/images/${item[0]}`} alt={item[1]} />
              <div>
                <h3>{item[1]}</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Other Items</h2>
        <div className={styles.menuGrid}>
          {others.map((item, index) => (
            <div className={styles.menuItem} key={index}>
              <img src={`/images/${item[0]}`} alt={item[1]} />
              <div>
                <h3>{item[1]}</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.specials}>
        <div className={styles.specialBox}>
          <h3>10% Off Breakfast Before 8am</h3>
          <button>Pre-Order</button>
        </div>

        <div className={styles.specialBoxDark}>
          <h3>$8.99 Dozen Original Glazed Donuts</h3>
          <button>Order Online</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <h3>New & Seasonal Specials Every Month!</h3>
        <button>Click Here</button>
      </footer>
    </main>
  );
}