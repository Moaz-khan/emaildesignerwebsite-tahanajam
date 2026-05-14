"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    label: 'High-quality Campaigns Design',
    title: 'Campaign Email Design',
    description: 'High-quality, on-brand campaign emails for product launches, promotions, newsletters, seasonal sales, and retention campaigns. Each email is designed with clean structure, strong hierarchy, mobile-first layouts, and clear CTA placement.',
    included: [
      'Custom campaign email design in Figma',
      'Mobile-first responsive layout',
      'Dark mode friendly design',
      'Klaviyo build and setup'
    ]
  },
  {
    id: 2,
    label: 'Flows',
    title: 'Klaviyo Flow Design & Build',
    description: 'Complete Klaviyo flow design and build for automated customer journeys. I design flows that feel natural, on-brand, and conversion-focused, from first signup to repeat purchase.',
    included: [
      'Welcome flow design and build',
      'Abandoned cart and checkout flows',
      'Post-purchase email flows',
      'Win-back and retention flows',
      'Browse abandonment and product follow-up emails',
      'Klaviyo setup and publishing',
      'Mobile and dark mode testing'
    ]
  },
  {
    id: 3,
    label: 'Systems',
    title: 'Email Design System',
    description: 'A reusable email design system built in Figma, so your brand can create consistent emails faster without starting from scratch every time. Perfect for teams that need speed, consistency, and better creative direction.',
    included: [
      'Master email template in Figma',
      'Reusable modular email sections',
      'Headers, footers, CTAs, product blocks, banners, and review sections',
      'Brand typography, colour, spacing, and layout rules',
      'Mobile and dark mode considerations',
      'Simple usage guide for your team',
      'Ready for Klaviyo or developer handoff'
    ]
  }
];

const Services = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {/* Left Side: Header & Nav */}
        <div className={styles.leftCol}>
          <div className={styles.header}>

            <h2 className={styles.title}>
              <span className={styles.premium}>One service.</span><br />
              Done better than anyone else.
            </h2>
            <p className={styles.subtitle}>
              Email template design, design systems, and Klaviyo flows. That's it.
              Four years of doing nothing else means the quality shows up in every pixel.
            </p>
          </div>

          <div className={styles.navigation}>
            <div className={styles.controls}>
              <button className={styles.arrowBtn} onClick={prev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              </button>

              <div className={styles.pagination}>
                {services.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${index === i ? styles.activeDot : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>

              <button className={styles.arrowBtn} onClick={next} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Slider */}
        <div className={styles.rightCol}>
          <div className={styles.sliderContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={styles.serviceCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.label}>{services[index].label}</span>
                </div>

                <h3 className={styles.serviceTitle}>{services[index].title}</h3>
                <p className={styles.serviceDesc}>{services[index].description}</p>

                <div className={styles.includedSection}>
                  <h4 className={styles.includedTitle}>What's included:</h4>
                  <ul className={styles.includedList}>
                    {services[index].included.map((item, i) => (
                      <li key={i} className={styles.includedItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FE6604" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><polyline points="20 6 9 17 4 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Services;
