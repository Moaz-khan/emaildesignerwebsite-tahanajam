import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './AboutPage.module.css';

export const metadata: Metadata = {
  title: 'About Taha Najam — Senior Freelance Email Designer',
  description: 'Taha Najam is a senior email designer with 4 years of specialised experience in email template design, email design systems, and Klaviyo flows for DTC brands.',
};

const expertise = [
  'Email template design (custom, from scratch)',
  'Email design systems and master templates',
  'Dark mode optimisation',
  'Mobile-first responsive email layout',
  'Klaviyo flow design and setup',
  'Campaign email design',
  'A/B test design and structure',
  'Email client testing (Gmail, Apple Mail, Outlook, iOS, Android)'
];

const tools = ['Figma', 'Klaviyo', 'Mailchimp', 'Attentive', 'Zoho Campaigns', 'Adobe Photoshop', 'HTML/CSS (email)'];

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>About</span>
          <h1 className={styles.headline}>4 years. One craft. Every inbox.</h1>
        </div>
      </section>

      {/* Main Bio */}
      <section className={styles.bioSection}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bioImageSide}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.expBadge}>
                  <span className={styles.expNum}>11</span>
                  <span className={styles.expText}>Years Total<br/>Design Exp.</span>
                </div>
              </div>
            </div>
            <div className={styles.bioTextSide}>
              <p className={styles.leadText}>
                I'm Taha Najam — a senior email designer and the founder of The Vibe Bureau, 
                a design studio based in Pakistan.
              </p>
              <div className={styles.bioParagraphs}>
                <p>
                  I started my career as a graphic designer, spent 7 years building skills across 
                  branding, web, and digital design — then found my focus in email. Four years ago, 
                  I went deep on email design specifically, and I haven't looked back.
                </p>
                <p>
                  Today, I work with DTC brands, ecommerce stores, and marketing teams across the UK, 
                  US, and UAE, designing email templates, welcome flows, and full email design systems 
                  that hold up at every level — visually, technically, and strategically.
                </p>
                <p>
                  I hold a Master's degree in Graphic Arts from UWE Bristol, completed in 2024. 
                  That academic background combined with four years of hands-on email work means 
                  I bring both rigour and real-world experience to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className={styles.differenceSection}>
        <div className={styles.container}>
          <div className={styles.diffGlassCard}>
            <div className={styles.diffHeader}>
              <h2 className={styles.diffHeading}>I'm not a generalist who also does email.</h2>
            </div>
            <div className={styles.diffBody}>
              <p>
                A lot of designers offer email design as one of fifteen services. For me, it's the only service.
              </p>
              <p>
                That focus matters. I know how dark mode breaks layouts. I know which Outlook versions 
                ignore media queries. I know how to build a Figma component library that your team can 
                actually use without a tutorial. I know what a welcome flow needs to say in email 1 versus email 3.
              </p>
              <p>
                You don't need to explain any of that to me. I already understand it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <span className={styles.miniBadge}>What I work in</span>
          <h2 className={styles.sectionHeading}>I work directly in your tools — no handoff friction.</h2>
          <div className={styles.toolsList}>
            {tools.map((tool, i) => (
              <span key={i} className={styles.toolItem}>{tool}</span>
            ))}
          </div>
          <p className={styles.toolsDescription}>
            I don't just design in Figma and hand over files. I build and publish directly in 
            Klaviyo and Mailchimp — which means fewer errors, faster go-live, and no 
            miscommunication between designer and developer.
          </p>
        </div>
      </section>

      {/* Expertise List */}
      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <span className={styles.miniBadge}>Areas of expertise</span>
          <div className={styles.expertiseGrid}>
            {expertise.map((item, i) => (
              <div key={i} className={styles.expertiseCard}>
                <div className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalBox}>
            <h2 className={styles.finalHeading}>Want to work together?</h2>
            <p className={styles.finalBody}>
              I take on a limited number of projects each month to make sure every client 
              gets my full attention. If you're ready to level up your email design, let's talk.
            </p>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>Book a free call →</button>
              <Link href="/services" className={styles.secondaryBtn}>View my services →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
