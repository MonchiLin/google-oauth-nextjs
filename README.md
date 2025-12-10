# Google OAuth Next.js demo

This minimal example uses [NextAuth.js](https://next-auth.js.org) with the Google provider to handle OAuth inside a Next.js app.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in your Google credentials:

   ```bash
   cp .env.example .env.local
   ```

   Required variables:

   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET` (use `openssl rand -base64 32` to generate one)
   - `NEXTAUTH_URL` (e.g. `http://localhost:3000` during development)

3. Run the development server:

   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to test signing in with Google.

## Deploying to Vercel

1. Create a new Vercel project and import this repository.
2. In **Project Settings → Environment Variables**, add:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET` (generate with `openssl rand -base64 32`)
   - `NEXTAUTH_URL` set to your Vercel domain, e.g. `https://your-project.vercel.app`
3. In the Google Cloud console, add the OAuth redirect URI
   `https://your-project.vercel.app/api/auth/callback/google` to the same credentials used
   locally.
4. Deploy; Vercel will build the Next.js app and NextAuth will handle the OAuth callbacks.
