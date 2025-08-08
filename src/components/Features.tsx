import { Card } from "@/components/ui/card";
import {
  Truck,
  Shield,
  Headphones,
  CreditCard,
  RotateCcw,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Fast Shipping",
    description:
      "Free shipping on orders over $50. Fast delivery within 2-3 business days worldwide.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "Your payments are secure with SSL encryption and trusted payment providers.",
    color: "text-accent",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get help anytime with our round-the-clock customer support team.",
    color: "text-success",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description:
      "Multiple payment options including buy now, pay later with 0% interest.",
    color: "text-warning",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "30-day hassle-free returns. No questions asked, full refund guarantee.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description:
      "Premium quality products with manufacturer warranty and quality assurance.",
    color: "text-accent",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with
            premium service and quality
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-feature group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 group-hover:shadow-glow transition-all duration-300`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                <h3 className="text-card-title mb-4">{feature.title}</h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
