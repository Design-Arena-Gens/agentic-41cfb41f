"use client";
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const { cartItems } = useCart();
  const itemsCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="nav">
      <Link href="/" className="brand">Storefront</Link>
      <Link href="/" className="badge">Products</Link>
      <Link href="/cart" className="badge">Cart ({itemsCount})</Link>
    </div>
  );
}
