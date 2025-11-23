import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative overflow-hidden bg-background text-foreground py-24 md:py-32 lg:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Unlock Your Potential
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Revolutionize your workflow with our innovative platform. Experience seamless collaboration and increased productivity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-md" >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/10 opacity-50 blur-3xl"></div>
    </div>
  );
};

export default Hero;