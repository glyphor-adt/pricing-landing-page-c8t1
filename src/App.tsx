import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';


interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-background text-foreground',
        theme === 'dark' ? 'dark' : 'light',
      )}
    >
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;