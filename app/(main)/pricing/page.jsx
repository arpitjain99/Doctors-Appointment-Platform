import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Shield, Check } from "lucide-react";
import { PricingTable } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Pricing from "@/components/pricing";

export default async function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex justify-start mb-6">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto mb-16 text-center">
        <Badge
          variant="outline"
          className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-6 glass-card"
        >
          💳 Affordable Healthcare
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold gradient-title mb-6">
          Simple, Transparent Pricing
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Choose the perfect consultation package that fits your healthcare
          needs with no hidden fees or long-term commitments
        </p>
      </div>

      {/* Pricing Table Section */}
      <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-emerald-500/10 mb-16">
        <Pricing />
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-center">
        <Card className="glass-card border-emerald-900/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Contact our support team for any questions about our pricing or services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@medimeet.com"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                📧 support@medimeet.com
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-emerald-700/30 hover:bg-muted/50 text-white rounded-lg font-medium transition-all duration-200 glass-card"
              >
                💬 Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
