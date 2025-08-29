import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Clear the session cookie
  res.setHeader('Set-Cookie', [
    'dc20_session=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/',
  ]);

  res.status(200).json({ message: 'Logged out successfully' });
}
