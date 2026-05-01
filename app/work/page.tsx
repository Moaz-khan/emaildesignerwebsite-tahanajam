import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkPage.module.css';

export const metadata: Metadata = {
  title: 'Email Design Case Studies — Taha Najam',
  description: 'Real email design projects by Taha Najam — welcome flows, templates, and design systems for DTC and ecommerce brands including The Promise Co, Rivlo, and more.',
};

const caseStudies = [
  {
    id: 1,
    brand: 'The Promise Co',
    type: 'Welcome Flow Design',
    tags: ['Klaviyo', '5 emails', 'DTC jewellery'],
    description: 'A 5-email welcome flow designed around emotional storytelling for a premium UK jewellery brand — from the first hello to the first purchase.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    slug: 'the-promise-co'
  },
  {
    id: 2,
    brand: 'Rivlo',
    type: 'Email Template Design',
    tags: ['Figma', 'HTML', 'Shoe brand'],
    description: 'Custom email template system designed to match a bold, lifestyle-driven shoe brand identity — mobile-first, dark mode ready.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    slug: 'rivlo'
  },
  {
    id: 3,
    brand: 'Sniffy Snax',
    type: 'Campaign Email Design',
    tags: ['Mailchimp', 'DTC', 'Pet brand'],
    description: 'Campaign email design for a playful DTC dog treats brand — balancing fun brand personality with clean, conversion-focused layout.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    slug: 'sniffy-snax'
  },
  {
    id: 4,
    brand: 'Morphosys',
    type: 'Email Design System',
    tags: ['Figma', 'Web3', 'Design system'],
    description: 'A complete email design system for a crypto/Web3 brand — modular Figma components, dark-mode-first, built for a fast-moving team.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    slug: 'morphosys'
  }
];

export default function WorkPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Work</span>
          <h1 className={styles.headline}>Real projects. Real brands. Real results.</h1>
          <p className={styles.subtext}>
            A selection of email design projects — each one built around the brand's identity 
            and the goal of making every send count.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={styles.studiesSection}>
        <div className={styles.container}>
          <div className={styles.studiesGrid}>
            {caseStudies.map((study) => (
              <div key={study.id} className={styles.studyCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={study.image} 
                    alt={study.brand} 
                    fill 
                    className={styles.studyImage}
                  />
                  <div className={styles.overlay}>
                    <Link href={`/work/${study.slug}`} className={styles.viewBtn}>
                      Read case study →
                    </Link>
                  </div>
                </div>
                <div className={styles.studyContent}>
                  <div className={styles.tagList}>
                    {study.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <h2 className={styles.brandTitle}>{study.brand}</h2>
                  <h3 className={styles.studyType}>{study.type}</h3>
                  <p className={styles.description}>{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.glassBox}>
            <h2 className={styles.finalTitle}>Have a project in mind?</h2>
            <p className={styles.finalText}>
              I'm currently taking on new projects for the coming months. 
              Let's build something exceptional together.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
