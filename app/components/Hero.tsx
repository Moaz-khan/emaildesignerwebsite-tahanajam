'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Column: Heading and CTAs */}
        <div className={styles.leftCol}>
          <div className={styles.statusBadge}>
            <span className={styles.dot}></span>
            Available for new projects
          </div>
          <h1 className={styles.heading}>
            Emails that look <span className={styles.highlight}>premium.</span> Flows that <span className={styles.highlight}>convert.</span>
          </h1>

          <p className={styles.subheading}>
            High-quality email design, Klaviyo flows, and email design systems for ecommerce and DTC brands
            that want every send to look on-brand, feel intentional, and drive action.
          </p>

          <div className={styles.ctaContainer}>
            <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.btnBlack}>Book a call</a>
            <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.btnOrange}>Get a free email sample</a>
          </div>

          <div className={styles.trustBar}>
            Upwork Top Rated Talent · Klaviyo Partner · 7+ Years Design Experience · Email Design Specialist
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className={styles.rightCol}>
          <div className={styles.heroImgWrapper}>
            <Image
              src="/figma-design/hero-rightside.png"
              alt="Hero Showcase"
              fill
              priority
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
