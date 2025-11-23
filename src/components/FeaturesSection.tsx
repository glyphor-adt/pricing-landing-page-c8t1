import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons'; // Assuming you have an icons component
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  icon: keyof typeof Icons; // Use a type-safe way to reference icon keys
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.CheckCircle className="w-5 h-5 text-primary" /> {/* Assuming Icons.CheckCircle exists and is a suitable default */}
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;


// Example usage (you'd put this in a page or another component):

// const featuresData: Feature[] = [
//   {
//     title: 'Intuitive Interface',
//     description: 'Our user-friendly design makes navigation and interaction a breeze.',
//     icon: 'LayoutDashboard', // Replace with an actual icon name if needed
//   },
//   {
//     title: 'Powerful Analytics',
//     description: 'Gain valuable insights with our robust analytics dashboard.',
//     icon: 'BarChart', // Replace with an actual icon name if needed
//   },
//   {
//     title: 'Seamless Integration',
//     description: 'Connect with your favorite tools and platforms effortlessly.',
//     icon: 'Link', // Replace with an actual icon name if needed
//   },
//   {
//     title: 'Customizable Settings',
//     description: 'Tailor the application to your specific needs with our flexible settings.',
//     icon: 'Settings', // Replace with an actual icon name if needed
//   },
// ];

// <FeaturesSection features={featuresData} />