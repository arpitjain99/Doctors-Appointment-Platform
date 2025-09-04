import React from "react";
import Link from "next/link";
import Image from "next/image";

const VideoCallLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header for video calls without authentication */}
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo-single.png"
              alt="Medimeet Logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="text-emerald-400 font-medium">
            Video Consultation
          </div>
        </nav>
      </header>
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default VideoCallLayout;
