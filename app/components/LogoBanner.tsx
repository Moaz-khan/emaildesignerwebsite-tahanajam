import React from 'react';
import styles from './LogoBanner.module.css';

const brands = [
  "The Promise Co",
  "Rivlo",
  "Sniffy Snax",
  "Morphosys",
  "Luxe Apparel",
  "DTC Collective",
  "B2B Growth",
  "Flow Mastery"
];

const LogoBanner = () => {
  // Duplicate for infinite scroll
  const doubleBrands = [...brands, ...brands, ...brands];

  return (
    <section className={styles.bannerSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {doubleBrands.map((brand, index) => (
            <div key={index} className={styles.brandLogo}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
