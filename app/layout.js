import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Google OAuth Next.js Demo',
  description: 'Minimal Google OAuth flow powered by NextAuth.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
