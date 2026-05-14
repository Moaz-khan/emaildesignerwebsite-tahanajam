"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './FloatingNavbar.module.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.navbarWrapper}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className={styles.navbar}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              scroll={true}
            >
              <span className={styles.label}>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
