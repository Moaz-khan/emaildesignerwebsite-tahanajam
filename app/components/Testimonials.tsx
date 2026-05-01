import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote: "Taha's focus on email design really shows. The templates are not only beautiful but technically flawless.",
    name: "Alex Rivera",
    role: "Marketing Director",
    brand: "The Promise Co"
  },
  {
    id: 2,
    quote: "Working directly in Klaviyo saved us so much time. The handoff was seamless and the results were immediate.",
    name: "Sarah Chen",
    role: "Founder",
    brand: "Sniffy Snax"
  },
  {
    id: 3,
    quote: "The email design system Taha built has transformed how our team works. Highly recommended for any scaling brand.",
    name: "James Wilson",
    role: "E-commerce Manager",
    brand: "Rivlo"
  },
  {
    id: 4,
    quote: "Finally, a designer who understands dark mode. Our emails look premium in every single inbox now.",
    name: "Elena Petrov",
    role: "Product Lead",
    brand: "Morphosys"
  },
  {
    id: 5,
    quote: "Exceptional attention to detail. Taha is our go-to specialist for all high-stakes email campaigns.",
    name: "Marcus Thorne",
    role: "Growth Lead",
    brand: "DTC Collective"
  },
  {
    id: 6,
    quote: "The automated flows Taha designed have become our highest-converting channel within just a month.",
    name: "Sophia Lee",
    role: "CMO",
    brand: "Luxe Apparel"
  }
];

const Testimonials = () => {
  // Duplicate the list to create a seamless infinite scroll effect
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Client feedback</span>
          <h2 className={styles.title}>What clients say.</h2>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {doubleTestimonials.map((t, index) => (
              <div key={`${t.id}-${index}`} className={styles.glassCard}>
                <p className={styles.quote}>"{t.quote}"</p>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.details}>{t.role}, {t.brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
