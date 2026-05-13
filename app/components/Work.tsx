"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Work.module.css';
import { InfiniteMovingImages } from './InfiniteMovingImages';

const imageNames = [
  "wrok1.png", "work2.png", "work3.png", "work4.png", "work5.png",
  "work6.png", "work7.png", "work8.png", "work9.png", "work10.png",
  "work11.png", "work12.png", "work13.png", "work14.png", "work15.png"
];

const workImages = imageNames.map(img => ({
  src: `/workhomepage/${img}`,
  alt: `Email Design Portfolio ${img}`
}));

const Work = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Email designs built to <span className={styles.premium}>convert.</span>
        </h2>
        <p className={styles.subtitle}>
          A few selected email projects designed for brands that needed more than good visuals.
          Each email is built around clear structure, strong hierarchy, on-brand design, and
          the goal of making every send count.
        </p>
        <Link href="/work" className={styles.btnBlack}>
          View More Work
        </Link>
      </div>

      <div className={styles.imageSection}>
        <InfiniteMovingImages 
          images={workImages}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default Work;

// Declaration for window.gsap
declare global {
  interface Window {
    gsap: any;
  }
}

