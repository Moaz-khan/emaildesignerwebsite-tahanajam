"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.glassFooter}>
          <div className={styles.mainContent}>
            {/* Left Side */}
            <div className={styles.leftSide}>
              <div className={styles.logo}>TAHA NAJAM</div>
              <p className={styles.slogan}>
                Premium Email Design & Systems for DTC and B2B brands.
              </p>
              <div className={styles.socialIcons}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  {/* @ts-ignore */}
                  <lord-icon
                    src="https://cdn.lordicon.com/tgyvxauj.json"
                    trigger="hover"
                    state="hover-rotate"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: '32px', height: '32px' }}>
                  </lord-icon>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  {/* @ts-ignore */}
                  <lord-icon
                    src="https://cdn.lordicon.com/bfoumeno.json"
                    trigger="hover"
                    state="hover-draw"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: '32px', height: '32px' }}>
                  </lord-icon>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  {/* @ts-ignore */}
                  <lord-icon
                    src="https://cdn.lordicon.com/qgebwute.json"
                    trigger="hover"
                    state="hover-draw"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: '32px', height: '32px' }}>
                  </lord-icon>
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className={styles.rightSide}>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Navigation</h4>
                <nav className={styles.nav}>
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/work">Work</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
              
              <div className={styles.newsletterColumn}>
                <h4 className={styles.columnTitle}>Newsletter</h4>
                <p className={styles.newsletterText}>Get email marketing tips directly in your inbox.</p>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className={styles.input} 
                  />
                  <button type="submit" className={styles.submitBtn}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Taha Najam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
