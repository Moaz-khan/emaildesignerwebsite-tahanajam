'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const cards = [
  { id: 1, image: '/assets/hero1.png', title: 'Premium Design 1' },
  { id: 2, image: '/assets/hero2.png', title: 'Flow Strategy 2' },
  { id: 3, image: '/assets/hero3.png', title: 'Design System 3' },
  { id: 4, image: '/assets/hero4.png', title: 'DTC Mastery 4' },
  { id: 5, image: '/assets/hero5.png', title: 'B2B Growth 5' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Column: Heading and CTAs */}
        <div className={styles.leftCol}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/assets/logo.png" 
              alt="Taha Najam Logo" 
              width={150} 
              height={40}
              style={{ height: 'auto', width: '150px' }}
              className={styles.logo}
              priority
            />
          </div>
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
            <Link href="/contact" className={styles.btnBlack}>Book a call</Link>
            <Link href="/sample" className={styles.btnOrange}>Get a free email sample</Link>
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
