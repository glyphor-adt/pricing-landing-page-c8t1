import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  imageUrl?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'CEO, Tech Solutions Inc.',
    testimonial:
      'This product has revolutionized our workflow! The support team is incredibly responsive and helpful.',
    imageUrl: 'https://source.unsplash.com/random/100x100?sig=1',
  },
  {
    id: 2,
    name: 'Bob Williams',
    title: 'Marketing Director, Global Corp',
    testimonial:
      'I am extremely impressed with the results. Our marketing campaigns have seen a significant boost in engagement.',
    imageUrl: 'https://source.unsplash.com/random/100x100?sig=2',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'Software Engineer, Innovate Labs',
    testimonial:
      'The integration was seamless, and the documentation is top-notch. Highly recommended!',
    imageUrl: 'https://source.unsplash.com/random/100x100?sig=3',
  },
  {
    id: 4,
    name: 'Diana Miller',
    title: 'Project Manager, Creative Agency',
    testimonial:
      'Excellent service and a fantastic product. It has made project management so much easier.',
    imageUrl: 'https://source.unsplash.com/random/100x100?sig=4',
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsCarousel(true);
    } else {
      setIsCarousel(false);
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCarousel(true);
      } else {
        setIsCarousel(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          What Our Customers Say
        </h2>

        {isCarousel ? (
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="snap-start shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card className="shadow-md border-none bg-card">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                      <Avatar>
                        <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="pl-4 space-y-1">
                        <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {testimonial.testimonial}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-md border-none bg-card">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Avatar>
                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="pl-4 space-y-1">
                    <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;