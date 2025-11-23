import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCheck } from "lucide-react"

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$9",
    description: "For individuals just getting started.",
    features: [
      "1 User",
      "5 Projects",
      "Basic Support",
    ],
    ctaText: "Get Started",
  },
  {
    name: "Pro",
    price: "$49",
    description: "For teams who need to collaborate.",
    features: [
      "5 Users",
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
    ],
    ctaText: "Start Pro",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited Users",
      "Unlimited Projects",
      "24/7 Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    ctaText: "Contact Us",
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Choose the plan that's right for you</h2>
        <p className="text-muted-foreground mb-12">
          Simple, transparent pricing. No hidden fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`${plan.isPopular ? "border-2 border-primary" : ""}  hover:shadow-lg transition-shadow duration-200`}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">{plan.price} <span className="text-sm text-muted-foreground">/mo</span></div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <CheckCheck className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant={plan.isPopular ? "primary" : "outline"}>{plan.ctaText}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;