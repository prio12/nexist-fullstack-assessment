import type { Metadata } from 'next';
import './globals.css';
import { ReduxProvider } from '../../store/provider';
import Navbar from '../../components/Navbar';

export const metadata: Metadata = {
  title: 'Nexist Market',
  description: 'Small-batch, thoughtfully sourced goods.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
