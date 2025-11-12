"use client";
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { cartItems, removeItem, updateQty, total, clear } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Your cart is empty</h1>
        <p>Explore our products and add something you like.</p>
        <Link href="/" className="btn">Browse products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: 12 }}>Your Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={item.image} alt={item.title} style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input type="number" min={1} value={item.quantity}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value || '1'))}
                  style={{ width: 64, padding: 8, borderRadius: 8, border: '1px solid #e2e8f0' }} />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn secondary" onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <button className="btn secondary" onClick={clear}>Clear cart</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
          <Link href="/checkout" className="btn">Proceed to checkout</Link>
        </div>
      </div>
    </div>
  );
}
