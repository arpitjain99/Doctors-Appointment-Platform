import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter= Inter({subsets: ["latin"]});

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with Doctors anytime, anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="Dark"
            enableSystem
            disableTransitionOnChange >
            <main className="min-h-screen">{children}</main>
        <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>
              Made by Arpit Jain
            </p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
