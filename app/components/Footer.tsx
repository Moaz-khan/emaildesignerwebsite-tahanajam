"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.whiteFooter}>
          <div className={styles.mainContent}>
            {/* Left Side: Brand & Badge */}
            <div className={styles.brandSide}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/assets/logo2.png"
                  alt="Taha Najam Logo"
                  width={120}
                  height={32}
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.aboutText}>
                Senior Email Designer & <br />Klaviyo Design Consultant
              </p>

              <div className={styles.badgeWrapper}>
                <Image
                  src="/assets/KPartner-BadgeTier-Charcoal-Bronze 1.svg"
                  alt="Klaviyo Partner Badge"
                  width={160}
                  height={60}
                  className={styles.klaviyoBadge}
                />
              </div>


            </div>

            {/* Center: Navigation */}
            <div className={styles.navSide}>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Navigation</h4>
                <nav className={styles.footerNav}>
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/work">Work</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Legal</h4>
                <nav className={styles.footerNav}>
                  <Link href="/terms">Terms & Conditions</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                </nav>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Contact</h4>
                <nav className={styles.footerNav}>
                  <a href="mailto:hello@tahanajam.co">hello@tahanajam.co</a>
                  <a href="tel:+447428698718">+44 7428 698718</a>
                  <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
                </nav>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Profile</h4>
                <nav className={styles.footerNav}>
                  <a href="https://www.linkedin.com/in/taha-najam-designer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.upwork.com/freelancers/~0107279814f3ae2127" target="_blank" rel="noopener noreferrer">Upwork</a>
                </nav>
              </div>
            </div>

            {/* Right Side: CTA Buttons */}
            <div className={styles.footerCtaSide}>
              <h4 className={styles.columnTitle}>Next Steps</h4>
              <p className={styles.ctaDesc}>Ready to transform your email marketing?</p>
              <div className={styles.footerCtaButtons}>
                <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.btnBlack}>
                  Book a Call
                </a>
                <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.btnOrange}>
                  Get Free Sample
                </a>
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
