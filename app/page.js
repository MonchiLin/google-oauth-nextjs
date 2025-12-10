'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <section className="card">
      <h1>Google OAuth with NextAuth.js</h1>
      <p>
        This demo uses <strong>NextAuth.js</strong> with the <strong>Google</strong> provider. Use
        the buttons below to start a sign-in flow, and NextAuth will manage the OAuth handshake
        for you.
      </p>

      {loading && <p>Checking your session...</p>}

      {!loading && !session && (
        <button onClick={() => signIn('google')}>
          Continue with Google
        </button>
      )}

      {!loading && session && (
        <>
          <p>Welcome, {session.user?.name || session.user?.email}!</p>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt="Profile"
              width={48}
              height={48}
              style={{ borderRadius: '50%', marginTop: '12px' }}
            />
          )}
          <button className="secondary" onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </section>
  );
}
