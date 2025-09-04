import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "MedSync - Connect with Doctors Anytime, Anywhere",
  description: "Book appointments, consult via video, and manage your healthcare journey with verified doctors on our secure platform.",
  keywords: "doctor appointment, telemedicine, video consultation, healthcare, medical appointments",
  authors: [{ name: "Arpit Jain" }],
  openGraph: {
    title: "MedSync - Connect with Doctors Anytime, Anywhere",
    description: "Book appointments, consult via video, and manage your healthcare journey with verified doctors on our secure platform.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white",
          card: "bg-card border-border",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
        }
      }}
    >
      <html lang="en" suppressHydrationWarning className={inter.variable}>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <footer className="bg-muted/30 border-t border-border/50 py-12 mt-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-center text-center gap-2">
      <p className="text-muted-foreground">
        © 2025 MedSync. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground">
        Made with ❤️ by Arpit Jain
      </p>
    </div>
  </div>
</footer>

            <Toaster 
              position="top-right"
              richColors
              closeButton
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
