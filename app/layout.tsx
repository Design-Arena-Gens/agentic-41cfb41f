import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { CartProvider } from '@/lib/cart-context';

export const metadata: Metadata = {
  title: 'Storefront',
  description: 'Modern e-commerce storefront built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="header">
            <div className="header-inner container">
              <Header />
            </div>
          </header>
          <main className="main container">{children}</main>
          <footer className="footer">
            <div className="container">? {new Date().getFullYear()} Storefront</div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
