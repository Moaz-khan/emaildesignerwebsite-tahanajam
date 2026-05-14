'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        TAHA NAJAM
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/services" className={styles.link}>Services</Link>
        <Link href="/work" className={styles.link}>Work</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
      </div>

      <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.cta}>
        Book a Call
      </a>
    </nav>
  );
};

export default Navbar;
