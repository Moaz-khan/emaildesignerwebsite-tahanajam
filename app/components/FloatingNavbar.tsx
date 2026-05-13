"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Home, Briefcase, User, MessageSquare, Star } from 'lucide-react';
import styles from './FloatingNavbar.module.css';

const navItems = [
  { id: 'hero', label: 'Home', icon: <Home size={20} /> },
  { id: 'services', label: 'Services', icon: <Briefcase size={20} /> },
  { id: 'work', label: 'Work', icon: <Briefcase size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'testimonials', label: 'Reviews', icon: <Star size={20} /> },
  { id: 'contact', label: 'Contact', icon: <MessageSquare size={20} /> },
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
              <span className={styles.icon}>{item.icon}</span>
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
