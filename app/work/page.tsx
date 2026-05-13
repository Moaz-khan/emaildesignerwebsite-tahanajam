import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './work.module.css';
import Contact from '../components/Contact';

const workImages = [
  "auto-layout-email-design-system.jpg.jpg",
  "brand-consistent-email-design-system.jpg.jpg",
  "campaign-email-design-system.jpg.jpg",
  "ecommerce-email-template-system.jpg.jpg",
  "email-component-library-in-figma.jpg.jpg",
  "email-design-system-for-ecommerce-brands.jpg.jpg",
  "email-design-system-with-auto-layout.jpg.jpg",
  "email-master-template-with-reusable-modules.jpg.jpg",
  "email-template-module-library.jpg.jpg",
  "figma-auto-layout-email-modules.jpg.jpg",
  "figma-email-design-system.jpg.jpg",
  "figma-email-template-components.jpg.jpg",
  "klaviyo-email-design-system.jpg.jpg",
  "klaviyo-flow-email-modules.jpg.jpg",
  "master-email-template-design-system.jpg.jpg",
  "modular-email-design-system.jpg.jpg",
  "modular-email-template-system.jpg.jpg",
  "responsive-email-design-modules.jpg.jpg",
  "reusable-email-template-modules.jpg.jpg",
  "reusable-klaviyo-email-sections.jpg.jpg"
];

const WorkPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Email Design Portfolio</h1>
          <div className={styles.description}>
            <p>A selection of premium campaign emails, Klaviyo flows, and ecommerce email designs created for DTC brands, direct clients, and agency partners.</p>
            <p>Each email is designed with clear structure, strong visual hierarchy, mobile-first layouts, and on-brand creative direction.</p>
          </div>
          
          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.btnBlack}>
              Book a Free Call
            </Link>
            <Link href="#contact" className={styles.btnOrange}>
              Claim Free Sample Email
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={styles.gallery}>
        {workImages.map((img, index) => (
          <div key={index} className={styles.imageItem}>
            <Image 
              src={`/work page/Work page images/${img}`}
              alt={`Email Design Showcase ${index + 1}`}
              width={1920}
              height={1080}
              className={styles.workImg}
              quality={90}
              priority={index < 2} 
            />
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default WorkPage;
