"use client";

import React from 'react';
import styles from './Testimonials.module.css';

import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Taha really understood the playful direction we wanted for Sniffy Snax. The packaging came out fun, bold, and still clean enough to feel premium. He took a simple idea and turned it into something that actually felt like a real shelf-ready brand.",
    author: "Founder, Sniffy Snax"
  },
  {
    id: 2,
    quote: "We needed designs that looked more polished without overcomplicating the brand. Taha gave the emails a much cleaner structure, better spacing, and a stronger visual flow. The final work felt professional and easy to use.",
    author: "Marketing Team, Inhance"
  },
  {
    id: 3,
    quote: "Taha was able to take a technical Web3 concept and make it feel clear, modern, and visually strong. The brand direction he created helped us present the company in a much more confident way.",
    author: "Team Morphosys"
  },
  {
    id: 4,
    quote: "What stood out was how quickly Taha understood the product style. The designs felt premium but not too heavy, and they made the prints look much more desirable online.",
    author: "Golf Prints"
  },
  {
    id: 5,
    quote: "Taha was easy to work with and very patient with revisions. He listened properly, gave useful design suggestions, and kept the whole visual direction consistent across the project.",
    author: "Lamad Team"
  },
  {
    id: 6,
    quote: "We wanted Rivio to feel clean, stylish, and more established. Taha helped us shape that look with a modern brand direction that felt simple, premium, and easy to apply across different touchpoints.",
    author: "Rivio"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentItems = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  // Reset to first page when layout changes to avoid index out of bounds
  React.useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Client feedback</span>
          <h2 className={styles.title}>What clients say.</h2>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.grid}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.slide}
              >
                {currentItems.map((t) => (
                  <div key={t.id} className={styles.testimonialCard}>
                    <p className={styles.quote}>"{t.quote}"</p>
                    <div className={styles.author}>
                      <span className={styles.dash}>—</span> {t.author}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.dots}>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${currentPage === i ? styles.activeDot : ''}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
