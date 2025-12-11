# API Setup Instructions for Vercel

This guide explains how to securely configure the Groq API key for the AI assistant feature.

## Why This Setup?

The API key is now stored securely on the server side using Vercel serverless functions. This means:
- ✅ Your API key is never exposed in the client-side code
- ✅ Safe to push to public repositories
- ✅ API key is stored in Vercel's secure environment variables

## Setup Steps

### 1. Get Your Groq API Key

1. Go to [https://console.groq.com/](https://console.groq.com/)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Create a new API key
5. Copy the API key (starts with `gsk_`)

### 2. Add Environment Variable in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add the following:
   - **Name**: `GROQ_API_KEY`
   - **Value**: Your Groq API key (paste the key you copied)
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**

### 3. Redeploy

After adding the environment variable, you need to redeploy:

1. Go to **Deployments** tab in Vercel
2. Click the three dots (⋯) on your latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

### 4. Test

Once deployed, test the AI assistant feature on your website. It should work without any API key errors.

## File Structure

```
personalwebsite/
├── api/
│   └── chat.js          # Serverless function (handles API calls securely)
├── index.html           # Frontend (no API key exposed)
└── API_SETUP.md         # This file
```

## How It Works

1. User types a message in the AI assistant
2. Frontend sends request to `/api/chat` (your Vercel serverless function)
3. Serverless function reads `GROQ_API_KEY` from environment variables
4. Serverless function makes secure request to Groq API
5. Response is streamed back to the frontend

## Troubleshooting

### "API key not configured" error

- Make sure you've added `GROQ_API_KEY` in Vercel environment variables
- Make sure you've redeployed after adding the variable
- Check that the variable name is exactly `GROQ_API_KEY` (case-sensitive)

### "Invalid API key" error

- Verify your Groq API key is correct
- Check if the API key has expired or been revoked
- Generate a new API key if needed

### API not working locally

- Vercel serverless functions only work when deployed
- For local development, you can use Vercel CLI: `vercel dev`
- Or test directly on the deployed site

## Security Notes

- ✅ API key is stored securely in Vercel (never in code)
- ✅ API key is never exposed to the client
- ✅ Safe to commit code to public repositories
- ⚠️ Make sure `GROQ_API_KEY` is never committed to git
- ⚠️ Don't share your API key publicly
