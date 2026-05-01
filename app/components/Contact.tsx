import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Ready to take your email design seriously?</h2>
            <p className={styles.bodyText}>
              Whether you need one template or a complete email design system, let's talk about what 
              your brand needs. I'm currently taking on new projects.
            </p>
            
            <div className={styles.ctaContainer}>
              <a href="https://calendly.com" className={styles.primaryCta}>
                Book a Free 30-Min Call
              </a>
              <a href="mailto:hello@tahanajam.co" className={styles.secondaryCta}>
                Email Me Directly — hello@tahanajam.co
              </a>
            </div>
            
            <p className={styles.note}>
              Response within 24 hours · Based in Pakistan (GMT+5) · Working with UK & US brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
