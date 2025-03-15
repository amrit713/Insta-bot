import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging.",
    ],
    isPopular: false,

    cta: "Get Started",
  },

  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advance analytics and insights",
      "Priority customer support",
      "Customer branding options",
    ],
    isPopular: true,
    cta: "Upgrade Now",
  },
];
export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center ">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Choose Your Plan
          </h1>
          <p className="dark:text-gray-400">
            Select the perfect plan to boost your Instagram engagement.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20  md:grid-cols-2">
          {plans.map((plan) => (
            <Card className="flex flex-col relative" key={plan.name}>
              {plan.isPopular && (
                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                  Popular
                </span>
              )}
              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  {plan.price} / mo
                </span>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  asChild
                  variant={!plan.isPopular ? "outline" : "default"}
                  className="w-full"
                >
                  <Link href="">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
