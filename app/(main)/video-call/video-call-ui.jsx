"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ZEGO_APP_ID, ZEGO_SERVER_SECRET, isZegoConfigured } from "@/lib/zegocloud-config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function VideoCall({ roomId, userName = "Guest" }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const [initError, setInitError] = useState(null);

  const userID = useMemo(() => "user_" + Math.random().toString(36).slice(2, 10), []);

  useEffect(() => {
    let zp;
    (async () => {
      try {
        if (!containerRef.current || !isZegoConfigured() || !roomId) return;

        // Import here to avoid SSR "document is not defined"
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          ZEGO_APP_ID,
          ZEGO_SERVER_SECRET,
          roomId,
          userID,
          userName
        );

        zp = ZegoUIKitPrebuilt.create(kitToken);
        await zp.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            { name: "Copy Link", url: `${window.location.origin}/video-call?roomId=${encodeURIComponent(roomId)}` },
          ],
          scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
          showScreenSharingButton: true,
          showPreJoinView: true,
          onLeaveRoom: () => router.push("/appointments"),
        });
      } catch (err) {
        console.error("Zego init error:", err);
        setInitError(err);
      }
    })();

    return () => {
      try { zp?.destroy?.(); } catch {}
    };
  }, [roomId, userID, userName, router]);

  if (!isZegoConfigured()) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Invalid Video Call</h1>
        <p className="mb-6">Please configure your ZegoCloud App ID and Server Secret in the environment variables.</p>
        <Button onClick={() => router.push("/appointments")} className="bg-emerald-600 hover:bg-emerald-700">
          Back to Appointments
        </Button>
      </div>
    );
  }

  if (!roomId) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Missing roomId</h1>
        <p className="mb-6">Append ?roomId=YOUR_ID to the URL.</p>
        <Button onClick={() => router.push("/appointments")} className="bg-emerald-600 hover:bg-emerald-700">
          Back to Appointments
        </Button>
      </div>
    );
  }

  if (initError) {
    const notReadable = String(initError?.extendedData || initError?.message || "").includes("NotReadableError");
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Video setup error</h1>
        <p className="mb-6">
          {notReadable
            ? "Your camera or microphone is in use or blocked. Close other apps, allow permissions, and try again."
            : "Failed to initialize the video call. Please reload and try again."}
        </p>
        <Button onClick={() => router.refresh()} className="bg-emerald-600 hover:bg-emerald-700">
          Retry
        </Button>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-screen" />;
}