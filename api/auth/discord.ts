import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return res.status(500).json({ error: 'Discord OAuth not configured' });
  }

  const discordAuthUrl = new URL('https://discord.com/api/oauth2/authorize');
  discordAuthUrl.searchParams.set('client_id', clientId);
  discordAuthUrl.searchParams.set('redirect_uri', redirectUri);
  discordAuthUrl.searchParams.set('response_type', 'code');
  discordAuthUrl.searchParams.set('scope', 'identify');

  res.redirect(discordAuthUrl.toString());
}
