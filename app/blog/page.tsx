import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPage.module.css';

import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog — Email Design & Strategy Insights | Taha Najam',
  description: 'Practical tips on email design, Klaviyo strategy, and ecommerce growth. Written for DTC founders and marketing teams.',
};

const posts = [
  {
    id: 1,
    title: 'Why your emails look broken in Dark Mode (and how to fix it)',
    excerpt: 'Dark mode isn’t just a trend—it’s how 40%+ of your audience sees your emails. Here is the technical checklist for a flawless dark mode experience.',
    category: 'Technical',
    date: 'April 28, 2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 2,
    title: 'The Modular Email Design System: A Guide for Scaling Brands',
    excerpt: 'Stop designing emails from scratch every Tuesday. Learn how to build a component library in Figma that speeds up your workflow by 5x.',
    category: 'Design Systems',
    date: 'April 20, 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 3,
    title: '5 Welcome Flow Mistakes That Are Costing You Revenue',
    excerpt: 'Is your welcome flow just a discount code and a "Thanks"? You’re missing the most important storytelling opportunity in the customer journey.',
    category: 'Strategy',
    date: 'April 15, 2024',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 4,
    title: 'Figma to Klaviyo: My Workflow for Pixel-Perfect Implementation',
    excerpt: 'The exact process I use to export, code, and upload designs into Klaviyo without losing quality or responsiveness.',
    category: 'Workflow',
    date: 'April 05, 2024',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    featured: false
  }
];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured);
  const otherPosts = posts.filter(p => !p.featured);

  return (
    <div className={styles.pageContainer}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Blog</span>
          <h1 className={styles.headline}>Email design & strategy insights.</h1>
          <p className={styles.subtext}>
            Practical tips on email design, Klaviyo strategy, and ecommerce growth. 
            Written for DTC founders and marketing teams.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <Link href={`/blog/${featuredPost.id}`} className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  fill 
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.postCategory}>{featuredPost.category}</span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{featuredPost.date}</span>
                  <span className={styles.readMore}>Read article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.blogGrid}>
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className={styles.postCard}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.glassBox}>
            <h2 className={styles.ctaTitle}>Get the best of the blog in your inbox.</h2>
            <p className={styles.ctaText}>Join 2,000+ founders and marketers receiving bi-weekly email design tips.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
