import { VercelRequest, VercelResponse } from '@vercel/node';

interface SessionData {
  userId: string;
  username: string;
  globalName: string | null;
  timestamp: number;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sessionCookie = req.cookies.dc20_session;

    if (!sessionCookie) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    // Decode session data
    const sessionData: SessionData = JSON.parse(
      Buffer.from(sessionCookie, 'base64').toString('utf-8')
    );

    // Check if session is still valid (24 hours)
    const sessionAge = Date.now() - sessionData.timestamp;
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours

    if (sessionAge > maxAge) {
      return res.status(401).json({ error: 'Session expired' });
    }

    // Return user info
    res.status(200).json({
      userId: sessionData.userId,
      username: sessionData.username,
      globalName: sessionData.globalName,
    });
  } catch (error) {
    console.error('Session verification error:', error);
    res.status(401).json({ error: 'Invalid session' });
  }
}
