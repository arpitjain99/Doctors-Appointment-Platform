import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShieldCheck, Stethoscope, Calendar, User, CreditCard } from "lucide-react";
import { Badge } from "./ui/badge";
import { checkUser } from "@/lib/checkUser";
import { checkAndAllocateCredits } from "@/actions/credits";
import HeaderUser from "./header-user";

export default async function Header() {
  const user = await checkUser();
  if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }

  return (
    <header className="fixed top-0 w-full border-b border-border/50 bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 glass">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <Image
            src="/logo-single.png"
            alt="MedSync Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <div className="flex items-center space-x-2">
          {/* Admin Links */}
          {user?.role === "ADMIN" && (
            <Link href="/admin">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2 glass-card hover:bg-emerald-900/20 border-emerald-700/30">
                <ShieldCheck className="h-4 w-4" />
                Admin Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 hover:bg-emerald-900/20">
                <ShieldCheck className="h-4 w-4" />
              </Button>
            </Link>
          )}

          {/* Doctor Links */}
          {user?.role === "DOCTOR" && (
            <Link href="/doctor">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2 glass-card hover:bg-emerald-900/20 border-emerald-700/30">
                <Stethoscope className="h-4 w-4" />
                Doctor Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 hover:bg-emerald-900/20">
                <Stethoscope className="h-4 w-4" />
              </Button>
            </Link>
          )}

          {/* Patient Links */}
          {user?.role === "PATIENT" && (
            <Link href="/appointments">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2 glass-card hover:bg-emerald-900/20 border-emerald-700/30">
                <Calendar className="h-4 w-4" />
                My Appointments
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 hover:bg-emerald-900/20">
                <Calendar className="h-4 w-4" />
              </Button>
            </Link>
          )}

          {/* Unassigned Role */}
          {user?.role === "UNASSIGNED" && (
            <Link href="/onboarding">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2 glass-card hover:bg-emerald-900/20 border-emerald-700/30">
                <User className="h-4 w-4" />
                Complete Profile
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 hover:bg-emerald-900/20">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          )}

          {/* Credits / Pricing badge */}
          {(!user || user?.role !== "ADMIN") && (
            <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
              <Badge
                variant="outline"
                className="h-9 bg-emerald-900/20 border-emerald-700/30 px-3 py-1 flex items-center gap-2 glass-card hover:bg-emerald-800/30 transition-colors duration-200"
              >
                <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">
                  {user && user.role !== "ADMIN" ? (
                    <>
                      {user.credits} <span className="hidden md:inline">
                        {user?.role === "PATIENT" ? "Credits" : "Earned"}
                      </span>
                    </>
                  ) : (
                    <>Pricing</>
                  )}
                </span>
              </Badge>
            </Link>
          )}

          {/* Clerk UI (client-only) */}
          <HeaderUser />
        </div>
      </nav>
    </header>
  );
}