"use client";
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export function AddToCart(props: { id: string; title: string; price: number; image: string }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  function handleAdd() {
    setAdding(true);
    addItem({ id: props.id, title: props.title, price: props.price, image: props.image }, qty);
    setTimeout(() => setAdding(false), 300);
  }

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input type="number" min={1} value={qty} onChange={(e) => setQty(parseInt(e.target.value || '1'))} style={{ width: 64, padding: 8, borderRadius: 8, border: '1px solid #e2e8f0' }} />
      <button className="btn" onClick={handleAdd} disabled={adding}>{adding ? 'Adding?' : 'Add to cart'}</button>
    </div>
  );
}
