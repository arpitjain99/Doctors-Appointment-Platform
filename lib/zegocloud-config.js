// Frontend-safe ZegoCloud config
export const ZEGO_APP_ID = Number(
  process.env.NEXT_PUBLIC_ZEGO_APP_ID ||
    process.env.NEXT_PUBLIC_ZEGOCLOUD_APP_ID ||
    0
);
export const ZEGO_SERVER_SECRET =
  process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET ||
  process.env.NEXT_PUBLIC_ZEGOCLOUD_SERVER_SECRET ||
  "";

// Helper so UI can show a friendly message if not configured
export function isZegoConfigured() {
  return Number.isFinite(ZEGO_APP_ID) && ZEGO_APP_ID > 0 && !!ZEGO_SERVER_SECRET;
}
export function isZegoCloudConfigured() {
  const appId = process.env.NEXT_PUBLIC_ZEGOCLOUD_APP_ID;
  return appId && appId !== 'your_app_id_here' && appId !== '1234567890';
}

export function generateTestToken(userId, roomId) {
  return `test_token_${userId}_${roomId}_${Date.now()}`;
}

export function generateUserId() {
  return `user_${Math.random().toString(36).substr(2, 9)}`;
}
