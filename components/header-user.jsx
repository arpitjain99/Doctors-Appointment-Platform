"use client";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function HeaderUser() {
  return (
    <div className="flex items-center space-x-2">
      <SignedOut>
        <SignInButton>
          <button className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-xl",
              userPreviewMainIdentifier: "font-semibold",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  );
}