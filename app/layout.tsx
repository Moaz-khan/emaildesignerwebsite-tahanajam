import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import FloatingNavbar from "./components/FloatingNavbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Taha Najam | Senior Email Designer for Ecommerce & DTC",
    template: "%s | Taha Najam"
  },
  description: "Senior Email Designer specializing in high-converting Klaviyo flows, campaign designs, and email systems for DTC brands. 7+ years of design experience.",
  keywords: ["Email Designer", "Klaviyo Expert", "DTC Email Marketing", "Ecommerce Design", "Email Design System", "Freelance Email Designer", "Taha Najam"],
  authors: [{ name: "Taha Najam" }],
  creator: "Taha Najam",
  publisher: "Taha Najam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tahanajam.com'), // Replace with actual domain when ready
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Taha Najam | Senior Email Designer',
    description: 'Building premium email designs that actually convert. Specialist in Klaviyo and DTC Ecommerce.',
    url: 'https://tahanajam.com',
    siteName: 'Taha Najam Portfolio',
    images: [
      {
        url: '/assets/tahanajam.png', 
        width: 1200,
        height: 630,
        alt: 'Taha Najam - Email Designer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taha Najam | Senior Email Designer',
    description: 'Building premium email designs that actually convert.',
    images: ['/assets/tahanajam.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-for-app/favicon.ico' },
      { url: '/favicon-for-app/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-for-app/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon-for-app/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon-for-app/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Taha Najam - Senior Email Designer",
              "image": "https://tahanajam.com/assets/og-image.jpg",
              "@id": "https://tahanajam.com",
              "url": "https://tahanajam.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "postalCode": "",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/in/taha-najam-designer/",
                "https://www.upwork.com/freelancers/~0107279814f3ae2127"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <FloatingNavbar />
        <Footer />
      </body>
    </html>
  );
}
