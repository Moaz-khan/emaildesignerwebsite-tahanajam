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
                  src="/assets/logo.png"
                  alt="Taha Najam Logo"
                  width={150}
                  height={40}
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.aboutText}>
                Senior Email Designer & Klaviyo Design Consultant
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

              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/taha-najam-designer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.upwork.com/freelancers/~0107279814f3ae2127" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 3.235a3.427 3.427 0 0 0-3.419 3.424v4.437c-1.206-2.181-2.288-4.542-2.316-4.607l-.216-.481H9.421V10.1c0 1.25-.436 2.062-1.303 2.062s-1.302-.812-1.302-2.062V6.008H3.619V10.1c0 3.328 2.046 5.488 4.5 5.488s4.5-2.16 4.5-5.488v-.764a27.632 27.632 0 0 0 1.631 3.235l-1.42 5.922h3.111l.884-3.722a7.352 7.352 0 0 0 2.235.342c2.408 0 4.441-1.921 4.441-4.757V6.659a3.427 3.427 0 0 0-3.422-3.424H18.56zm.2 8.783a3.46 3.46 0 0 1-1.353-.255l.23-1.002.043-.198v-3.95a1.26 1.26 0 0 1 1.258-1.257c.694 0 1.258.563 1.258 1.257v3.649c0 1.054-.601 1.756-1.436 1.756z"/></svg>
                </a>
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
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
              <div className={styles.linksColumn}>
                <h4 className={styles.columnTitle}>Legal</h4>
                <nav className={styles.footerNav}>
                  <Link href="/terms">Terms & Conditions</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                </nav>
              </div>
            </div>

            {/* Right Side: Newsletter */}
            <div className={styles.newsletterSide}>
              <h4 className={styles.columnTitle}>Newsletter</h4>
              <p className={styles.newsletterDesc}>Get email marketing tips and design insights.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className={styles.submitBtn}>
                    SUBMIT
                  </button>
                </div>
              </form>
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
