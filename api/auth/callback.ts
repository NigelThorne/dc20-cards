import { VercelRequest, VercelResponse } from '@vercel/node';

interface DiscordTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  global_name: string | null;
  avatar: string | null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return res.status(500).json({ error: 'Discord OAuth not configured' });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData: DiscordTokenResponse = await tokenResponse.json();

    // Get user information
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData: DiscordUser = await userResponse.json();

    // Log access (you can expand this to save to a database)
    console.log('Discord user accessed site:', {
      id: userData.id,
      username: userData.username,
      globalName: userData.global_name,
      timestamp: new Date().toISOString(),
    });

    // Create session token (simple approach - in production you'd want something more secure)
    const sessionData = {
      userId: userData.id,
      username: userData.username,
      globalName: userData.global_name,
      timestamp: Date.now(),
    };

    // Set secure cookie
    const sessionToken = Buffer.from(JSON.stringify(sessionData)).toString('base64');

    res.setHeader('Set-Cookie', [
      `dc20_session=${sessionToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`,
    ]);

    // Redirect back to the main app
    res.redirect('/');
  } catch (error) {
    console.error('Discord OAuth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}
