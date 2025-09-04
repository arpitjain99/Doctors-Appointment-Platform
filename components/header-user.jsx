"use client";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function HeaderUser() {
  return (
    <div className="flex items-center space-x-2">
      <SignedOut>
        <SignInButton>
          <button className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/25">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10 ring-2 ring-emerald-500/20 hover:ring-emerald-500/40 transition-all duration-200",
              userButtonPopoverCard: "shadow-2xl shadow-emerald-500/10 glass-card border-emerald-900/20",
              userPreviewMainIdentifier: "font-semibold text-foreground",
              userPreviewSecondaryIdentifier: "text-muted-foreground",
              userButtonPopoverActionButton: "hover:bg-emerald-900/20 text-foreground",
              userButtonPopoverActionButtonText: "text-foreground",
              userButtonPopoverFooter: "border-t border-border/50",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  );
}