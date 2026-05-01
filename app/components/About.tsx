import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.contentGrid}>
            <div className={styles.textSide}>
              <span className={styles.badge}>Who I am</span>
              <h2 className={styles.heading}>
                A designer who specialises in one thing — and does it at the highest level.
              </h2>
              <div className={styles.bodyText}>
                <p>
                  I'm Taha Najam, a senior email designer based in Pakistan, working with brands across 
                  the UK, US, and UAE. I've spent 4 years focused exclusively on email design — and 7 years in 
                  graphic design before that.
                </p>
                <p>
                  I work directly in Klaviyo, Figma, and Mailchimp, so there's no long handoff process or 
                  miscommunication. You get a designer who understands your brand, your platform, and your 
                  inbox.
                </p>
              </div>
              <Link href="/about" className={styles.cta}>
                Read my full story <span>→</span>
              </Link>
            </div>
            
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <div className={styles.profileBox}>
                  {/* Placeholder for Taha's photo - using a stylish professional shot */}
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.experienceBadge}>
                    <span className={styles.expNum}>11</span>
                    <span className={styles.expLabel}>Years<br/>Exp.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
