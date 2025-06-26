import './global.css';
import { Footer, MobileNavigationDrawer, Navbar } from '@/components';
import React from 'react';

export const metadata = {
  title: 'Connect Academy',
  description: `At Connect-Academy, we specialize in
transforming brands through exceptional web
design, strategic digital marketing, and top-tier
virtual assistant training. Based in the Philippines,
we blend creativity with technical expertise to
help businesses build strong online identities,
grow their digital presence, and operate more
efficiently.`,
  keywords: [
    'education',
    'learning',
    'courses',
    'academy',
    'social media management',
    'SEO',
    'video production',
    'photo production',
    'brand culture videos',
    'company short documentary',
    'commercials',
    'ads',
    'case studies',
    'testimonials',
    'live event recording',
    'event recaps',
    'event photography',
    'brand photo shoots',
    'product photography',
    'events management',
    'website development',
  ],
  authors: [{ name: 'Renzo' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  metadataBase: new URL('https://connect-academy.com'),
  openGraph: {
    title: 'Connect Academy',
    description: `We're redefining digital growth for purpose-driven brands and
professionals—combining human creativity with an AI-powered
approach in web design, digital marketing, and comprehensive training.`,
    url: 'https://connect-academy.com',
    siteName: 'Connect Academy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/connect_academy_logo_white_outline.png',
        width: 1200,
        height: 630,
        alt: 'Connect Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect Academy',
    description: `We're redefining digital growth for purpose-driven brands and
professionals—combining human creativity with an AI-powered
approach in web design, digital marketing, and comprehensive training.`,
    images: ['/connect_academy_logo_white_outline.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex flex-col min-h-screen scroll-smooth">
        <Navbar />
        <main className="flex-grow">{children}</main>

        <MobileNavigationDrawer />
        <Footer />
      </body>
    </html>
  );
}
