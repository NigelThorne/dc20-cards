# Discord OAuth Setup Guide

This guide will help you set up Discord OAuth authentication for the DC20 Character Cards site.

## Step 1: Create Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" 
3. Give it a name like "DC20 Character Cards"
4. Click "Create"

## Step 2: Configure OAuth2

1. In your new application, click "OAuth2" in the left sidebar
2. Click "General" under OAuth2
3. Copy the **Client ID** - you'll need this later
4. Copy the **Client Secret** - you'll need this later
5. Under "Redirects", add these URLs:
   - For production: `https://your-vercel-domain.vercel.app/api/auth/callback`
   - For local development: `http://localhost:5173/api/auth/callback`

## Step 3: Set Environment Variables

### For Vercel (Production)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   ```
   DISCORD_CLIENT_ID=your_client_id_from_step_2
   DISCORD_CLIENT_SECRET=your_client_secret_from_step_2  
   DISCORD_REDIRECT_URI=https://your-vercel-domain.vercel.app/api/auth/callback
   ```

### For Local Development

1. Create a `.env` file in the root directory (it's already in .gitignore)
2. Add these variables:
   ```
   DISCORD_CLIENT_ID=your_client_id_from_step_2
   DISCORD_CLIENT_SECRET=your_client_secret_from_step_2
   DISCORD_REDIRECT_URI=http://localhost:5173/api/auth/callback
   ```

## Step 4: Update Redirect URI

Make sure to replace `your-vercel-domain.vercel.app` with your actual Vercel domain in:
- Discord application redirect settings
- Environment variables
- Both production and development environments

## Step 5: Test

1. Deploy to Vercel (environment variables will be picked up automatically)
2. Visit your site - you should see the Discord login page
3. Click "Continue with Discord" to test the flow

## Security Notes

- Never commit your `.env` file to git
- The client secret should never be exposed to the frontend
- Sessions expire after 24 hours
- All OAuth traffic is handled server-side via Vercel API routes

## Troubleshooting

**"Invalid redirect URI"**
- Make sure the redirect URI in Discord matches exactly what's in your environment variables

**"Discord OAuth not configured"** 
- Check that all environment variables are set correctly in Vercel dashboard

**"Authentication failed"**
- Check Vercel function logs for detailed error messages
- Verify client ID and secret are correct