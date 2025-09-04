import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-teal-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium glass-card"
              >
                🏥 Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform. Experience the future of healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 btn-hover-lift shadow-lg shadow-emerald-500/25"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80 btn-hover-lift glass-card"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden animate-slide-in-right">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              ✨ How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Steps to Better Healthcare
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks. 
              Experience seamless healthcare management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 card-hover glass-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-4 rounded-xl w-fit mb-4 group-hover:bg-emerald-800/30 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              💳 Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs. No hidden fees, no long-term commitments.
            </p>
          </div>

          <div className="mx-auto">
            {/* Clerk Pricing Table */}
            <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-emerald-500/10">
              <Pricing />
            </div>

            {/* Description */}
            <Card className="mt-12 bg-muted/20 border-emerald-900/30 glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    {creditBenefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1.5 rounded-full">
                          <svg
                            className="h-4 w-4 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          className="text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {creditBenefits.slice(2).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-emerald-900/20 p-1.5 rounded-full">
                          <svg
                            className="h-4 w-4 text-emerald-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          className="text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              ⭐ Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who trust our platform for their healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 card-hover glass-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4 group-hover:bg-emerald-800/30 transition-colors duration-300">
                      <span className="text-emerald-400 font-bold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-teal-950/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20 glass-card overflow-hidden">
            <CardContent className="p-8 md:p-12 lg:p-16 relative">
              <div className="max-w-2xl relative z-10">
                <Badge
                  variant="outline"
                  className="bg-emerald-800/30 border-emerald-600/30 px-4 py-1 text-emerald-300 text-sm font-medium mb-6"
                >
                  🚀 Get Started Today
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be - accessible, convenient, and reliable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 btn-hover-lift shadow-lg shadow-emerald-500/25"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700/30 hover:bg-muted/80 btn-hover-lift glass-card"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative healthcare elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse-slow"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-[150px] h-[150px] bg-teal-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
