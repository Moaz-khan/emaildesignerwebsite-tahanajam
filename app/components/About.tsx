import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutGrid}>
            {/* Left Side: Text Content */}
            <div className={styles.textSide}>
              <h2 className={styles.heading}>
                <span className={styles.hiText}>Hi,</span>
              </h2>

              <div className={styles.bodyText}>
                <p>
                  I’m Taha, a Senior Email Designer and Klaviyo-focused design consultant with 7+ years of
                  design experience and 5 years focused on email design for ecommerce and DTC brands.
                </p>
                <p>
                  I hold a Master’s degree in Graphic Arts from the University of the West of England,
                  and I’m also an Upwork Top Rated Talent. My work combines strong visual design, clean
                  structure, brand consistency, and practical Klaviyo implementation.
                </p>
                <p>
                  I help brands improve how their emails look, read, and perform, from one-off campaign
                  emails to complete Klaviyo flows and reusable email design systems. My focus is simple:
                  premium design, clear hierarchy, mobile-first layouts, and emails that are ready to send.
                </p>
              </div>

              <div className={styles.keyPoints}>
                <h3 className={styles.keyTitle}>Key points:</h3>
                <ul className={styles.pointList}>
                  <li>7+ years of design experience</li>
                  <li>5 years focused on email design</li>
                  <li>High-quality campaign email design</li>
                  <li>Klaviyo flow design and build</li>
                  <li>Conversion-focused email structure</li>
                  <li>Figma design to Klaviyo implementation</li>
                </ul>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className={styles.imageSide}>
              <div className={styles.imageWrapper}>
                <div className={styles.profileBox}>
                  <Image
                    src="/assets/tahanajam2.png"
                    alt="Taha - Senior Email Designer"
                    fill
                    className={styles.profileImg}
                  />
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
