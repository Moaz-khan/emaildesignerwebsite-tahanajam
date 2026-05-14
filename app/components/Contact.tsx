import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactCard}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Want to see what your next email could look like?</h2>
            <p className={styles.subtext}>
              Send me your brand, website, or current email, and I'll create a free sample email design 
              concept to show how I can improve the layout, hierarchy, and overall look.
            </p>
            
            <div className={styles.ctaWrapper}>
              <a href="https://calendly.com/hello-tahanajam/30min" target="_blank" rel="noopener noreferrer" className={styles.claimButton}>
                CLAIM FREE SAMPLE EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
