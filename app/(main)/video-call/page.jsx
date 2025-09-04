import VideoCall from "./video-call-ui";

export const dynamic = "force-dynamic";

export default async function VideoCallPage({ searchParams }) {
  const sp = await searchParams;

  const getParam = (key) => {
    if (!sp) return null;
    if (typeof sp.get === "function") return sp.get(key) || null;
    return sp?.[key] ?? null;
  };

  // Accept multiple keys; roomId is preferred
  const roomId =
    getParam("roomId") || getParam("sessionId") || getParam("appointmentId") || null;

  const userName = "Doctor"; // or "Patient" depending on the route/user
  return <VideoCall roomId={roomId} userName={userName} />;
}