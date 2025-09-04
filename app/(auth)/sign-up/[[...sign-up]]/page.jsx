import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="mb-6 border-emerald-900/30 glass-card"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Join MediMeet</h1>
          <p className="text-muted-foreground">
            Create your account and start your healthcare journey today
          </p>
        </div>
        
        <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-emerald-500/10">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white",
                card: "bg-transparent shadow-none",
                headerTitle: "text-foreground",
                headerSubtitle: "text-muted-foreground",
                socialButtonsBlockButton: "border-border hover:bg-muted/50",
                formFieldInput: "bg-background border-border focus:border-emerald-500",
                footerActionLink: "text-emerald-400 hover:text-emerald-300",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
