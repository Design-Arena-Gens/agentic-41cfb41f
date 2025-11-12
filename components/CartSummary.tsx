"use client";
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export function CartSummary() {
  const { total, cartItems } = useCart();
  if (cartItems.length === 0) return null;
  return (
    <div style={{ position: 'fixed', bottom: 16, right: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 12, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)' }}>
      <div style={{ fontWeight: 700 }}>Cart total: ${total.toFixed(2)}</div>
      <div style={{ marginTop: 8 }}>
        <Link href="/cart" className="btn">View cart</Link>
      </div>
    </div>
  );
}
