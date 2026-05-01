import Hero from './components/Hero';
import LogoBanner from './components/LogoBanner';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance Email Designer for Hire — Taha Najam',
  description: 'Taha Najam is a senior freelance email designer specialising in email templates, welcome flows, and email design systems for DTC and ecommerce brands. Available for Klaviyo, Mailchimp, Attentive and Figma projects.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <LogoBanner />
        <Services />
        <About />
        <Work />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
