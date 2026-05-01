"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Email Template Design',
    iconLabel: 'Template Design',
    description: 'Custom email templates built to match your brand exactly. Every template is dark-mode ready, mobile-optimised, and tested across major email clients — so it looks right everywhere it lands.',
    included: [
      'Figma-based templates',
      'Dark mode optimisation',
      'Mobile-first responsive design',
      'Up to 2 revision rounds'
    ],
    icon: 'https://cdn.lordicon.com/fikcyfpp.json',
    trigger: 'loop',
  },
  {
    id: 2,
    title: 'Email Design System',
    iconLabel: 'Design System',
    description: 'Stop rebuilding your emails from scratch every time. I design a master email system — a complete set of modular components in Figma — so your team can build any email in minutes without losing brand consistency.',
    included: [
      'Master template architecture in Figma',
      'Modular component library (headers, CTAs, product blocks, footers)',
      'Brand typography, colour, and spacing tokens',
      'Documentation for your team',
      'Handoff-ready for developers or direct use in Klaviyo'
    ],
    icon: 'https://cdn.lordicon.com/jectmwqf.json',
    trigger: 'loop',
  },
  {
    id: 3,
    title: 'Klaviyo Flow & Campaign Design',
    iconLabel: 'Flow Design',
    description: 'Full email sequence design — from welcome flows to post-purchase and win-back series. I handle the design, structure, and layout so every email in the flow looks intentional and on-brand.',
    included: [
      'Welcome flow design (3–5 emails)',
      'Abandon cart, post-purchase, and win-back flows',
      'Campaign email design for product launches and promotions',
      'Set up and publishing in Klaviyo',
      'A/B testing recommendations'
    ],
    icon: 'https://cdn.lordicon.com/xzzsrucp.json',
    trigger: 'loop',
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
            <span className={styles.badge}>What I do</span>
            <h2 className={styles.title}>Three services. One obsession — email design.</h2>
            <p className={styles.subtitle}>
              I don't do everything. I do email. That focus means you get a designer who
              understands every detail of the inbox — technically, strategically, and visually.
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
                  <div className={styles.iconBox}>
                    {/* @ts-ignore */}
                    <lord-icon
                      src={services[index].icon}
                      trigger={services[index].trigger}
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{ width: '60px', height: '60px' }}>
                    </lord-icon>
                  </div>
                  <span className={styles.iconLabel}>{services[index].iconLabel}</span>
                </div>

                <h3 className={styles.serviceTitle}>{services[index].title}</h3>
                <p className={styles.serviceDesc}>{services[index].description}</p>

                <div className={styles.includedSection}>
                  <h4 className={styles.includedTitle}>What's included:</h4>
                  <ul className={styles.includedList}>
                    {services[index].included.map((item, i) => (
                      <li key={i} className={styles.includedItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><polyline points="20 6 9 17 4 12" /></svg>
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
    </section>
  );
};

export default Services;
