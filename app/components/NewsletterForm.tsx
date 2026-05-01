"use client";
import React from 'react';
import styles from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="your@email.com" className={styles.input} />
      <button type="submit" className={styles.button}>Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
