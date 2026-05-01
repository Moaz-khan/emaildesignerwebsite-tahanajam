import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './CaseStudy.module.css';

// Case Study Data
const caseStudiesData: Record<string, any> = {
  'the-promise-co': {
    brand: 'The Promise Co',
    title: 'The Promise Co — Welcome Flow Email Design',
    type: 'Welcome Flow Design — 5 Emails',
    platform: 'Klaviyo',
    industry: 'Premium DTC Jewellery',
    overview: "The Promise Co is a premium jewellery brand built around meaningful gifting moments — engagements, anniversaries, milestones. Their products carry emotional weight, and their email design needed to reflect that. The brief was clear: design a 5-email welcome flow that introduces new subscribers to the brand, builds trust, communicates value, and leads naturally toward a first purchase.",
    challenge: "Premium jewellery brands live and die on emotion and trust. A welcome flow that feels generic or rushed destroys both. The design needed to feel warm but polished, personal but professional — without leaning on heavy graphics or slow-loading imagery. The additional challenge: every email had to perform in dark mode and across all major email clients, including Outlook, which notoriously ignores modern CSS.",
    approach: "I structured the flow around a clear emotional arc:",
    approachSteps: [
      { label: 'Email 1', text: 'Brand welcome — who The Promise Co is and what they stand for' },
      { label: 'Email 2', text: 'The story — the craft and care behind each piece' },
      { label: 'Email 3', text: 'Social proof — real customers, real moments, real reviews' },
      { label: 'Email 4', text: 'Product education — how to choose the right piece' },
      { label: 'Email 5', text: 'First purchase offer — gentle urgency, clear value' }
    ],
    approachClosing: "Each email was designed with maximum white space, clean typography, and restrained use of imagery — letting the product do the talking without visual clutter.",
    deliverables: [
      '5 fully designed email templates (Figma)',
      'HTML-coded versions of each email',
      'Dark mode optimised across all 5 emails',
      'Published and live in Klaviyo',
      'Mobile-first responsive layouts',
      'A/B test setup on Email 1 subject line'
    ],
    result: "A complete welcome flow that matches the premium feel of the brand — from the first email to the last. Every email tested across Gmail, Apple Mail, Outlook, iOS, and Android before going live.",
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    metaDescription: 'How I designed a 5-email Klaviyo welcome flow for The Promise Co, a premium DTC jewellery brand — from strategy to final design.'
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudiesData[slug];
  
  if (!data) return { title: 'Project Not Found' };

  return {
    title: data.title + ' | Taha Najam',
    description: data.metaDescription,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Case study</span>
          <h1 className={styles.brandName}>{data.brand}</h1>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project Type</span>
              <span className={styles.metaValue}>{data.type}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Platform</span>
              <span className={styles.metaValue}>{data.platform}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>{data.industry}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className={styles.imageSection}>
        <div className={styles.container}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src={data.heroImage} 
              alt={data.brand} 
              fill 
              className={styles.mainImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column: Main Body */}
            <div className={styles.leftCol}>
              <div className={styles.block}>
                <h2 className={styles.sectionTitle}>Project overview</h2>
                <p className={styles.text}>{data.overview}</p>
              </div>

              <div className={styles.block}>
                <h2 className={styles.sectionTitle}>The challenge</h2>
                <p className={styles.text}>{data.challenge}</p>
              </div>

              <div className={styles.block}>
                <h2 className={styles.sectionTitle}>Creative approach</h2>
                <p className={styles.text}>{data.approach}</p>
                <div className={styles.approachList}>
                  {data.approachSteps.map((step: any, i: number) => (
                    <div key={i} className={styles.approachStep}>
                      <span className={styles.stepLabel}>{step.label}:</span>
                      <span className={styles.stepText}>{step.text}</span>
                    </div>
                  ))}
                </div>
                <p className={`${styles.text} ${styles.mt4}`}>{data.approachClosing}</p>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className={styles.rightCol}>
              <div className={styles.glassBox}>
                <h2 className={styles.sidebarTitle}>Deliverables</h2>
                <ul className={styles.deliverablesList}>
                  {data.deliverables.map((item: string, i: number) => (
                    <li key={i} className={styles.deliverableItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.resultBox}>
                <h2 className={styles.sidebarTitle}>The result</h2>
                <p className={styles.resultText}>{data.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaHeading}>Want a welcome flow like this for your brand?</h2>
            <Link href="/contact" className={styles.ctaButton}>
              Let's talk →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
