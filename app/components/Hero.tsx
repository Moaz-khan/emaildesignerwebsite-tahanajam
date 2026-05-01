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
          <h1 className={styles.heading}>
            Emails That Look Premium.<br />
            Flows That Convert.
          </h1>
          
          <div className={styles.ctaContainer}>
            <Link href="/work" className={styles.primaryCta}>See My Work</Link>
            <Link href="/contact" className={styles.secondaryCta}>Book a Free Call</Link>
          </div>

          <div className={styles.achievements}>
            <div className={styles.achievementItem}>
              {/* @ts-ignore */}
              <lord-icon
                  src="https://cdn.lordicon.com/vqhlecvy.json"
                  trigger="in"
                  delay="1500"
                  state="in-reveal"
                  colors="primary:#111827,secondary:#111827"
                  style={{ width: '45px', height: '45px' }}>
              </lord-icon>
              <span className={styles.achNum}>50+</span>
              <span className={styles.achLabel}>Satisfied<br />Clients</span>
            </div>
            <div className={styles.achievementItem}>
              {/* @ts-ignore */}
              <lord-icon
                  src="https://cdn.lordicon.com/euaablbm.json"
                  trigger="loop"
                  state="loop-cycle"
                  colors="primary:#111827,secondary:#111827"
                  style={{ width: '45px', height: '45px' }}>
              </lord-icon>
              <span className={styles.achNum}>100+</span>
              <span className={styles.achLabel}>Email Flows<br />Optimized</span>
            </div>
            <div className={styles.achievementItem}>
              {/* @ts-ignore */}
              <lord-icon
                  src="https://cdn.lordicon.com/cvwrvyjv.json"
                  trigger="in"
                  delay="1500"
                  state="in-dynamic"
                  colors="primary:#111827,secondary:#111827"
                  style={{ width: '45px', height: '45px' }}>
              </lord-icon>
              <span className={styles.achNum}>5 yrs</span>
              <span className={styles.achLabel}>Specialist<br />Experience</span>
            </div>
          </div>
        </div>

        {/* Right Column: Subheading and Slider */}
        <div className={styles.rightCol}>
          <div className={styles.subheadingContainer}>
            <div className={styles.statusBadge}>
              <span className={styles.dot}></span>
              Currently available for new projects
            </div>
            <p className={styles.subheading}>
              I'm Taha, a senior email designer with 5 years of specialist experience. 
              I design top-notch email templates, flows, and scalable email design systems 
              for DTC and B2B brands.
            </p>
          </div>

          <div className={styles.cardSliderContainer}>
            <div className={styles.cardsWrapper}>
              <AnimatePresence mode="popLayout">
                {cards.map((card, i) => {
                  let relativeIndex = (i - index + cards.length) % cards.length;
                  if (relativeIndex > 3) return null;

                  return (
                    <motion.div
                      key={card.id}
                      className={styles.card}
                      initial={{ scale: 0.8, opacity: 0, y: 50 }}
                      animate={{
                        scale: 1 - relativeIndex * 0.05,
                        y: relativeIndex * -20,
                        x: relativeIndex * 15,
                        zIndex: cards.length - relativeIndex,
                        opacity: 1 - relativeIndex * 0.25,
                        rotate: relativeIndex * 2,
                      }}
                      exit={{ x: -200, opacity: 0, rotate: -20 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <div className={styles.cardImage}>
                        <Image 
                          src={card.image} 
                          alt={card.title}
                          fill
                          className={styles.img}
                          priority={i === index}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
