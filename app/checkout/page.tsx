"use client";
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

async function fakePay(amount: number) {
  // Simulate calling our API checkout route
  const res = await fetch('/api/checkout', { method: 'POST', body: JSON.stringify({ amount }) });
  return res.json();
}

export default function CheckoutPage() {
  const { total, clear } = useCart();
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    setResult(null);
  }, [total]);

  async function handlePay() {
    setProcessing(true);
    try {
      const r = await fakePay(total);
      setResult(r);
      if (r.success) clear();
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div style={{ maxWidth: 560 }}>
      <h1>Checkout</h1>
      <p style={{ color: '#475569' }}>Enter payment details (simulated) and confirm your order.</p>
      <div style={{ display: 'grid', gap: 8, margin: '16px 0' }}>
        <input placeholder="Full name" style={{ padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} />
        <input placeholder="Card number" style={{ padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="MM/YY" style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} />
          <input placeholder="CVC" style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
        <button className="btn" onClick={handlePay} disabled={processing || total === 0}>
          {processing ? 'Processing?' : 'Pay now'}
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 16 }}>
          <div className="badge" style={{ background: result.success ? '#dcfce7' : '#fee2e2', borderColor: result.success ? '#86efac' : '#fecaca' }}>
            {result.message}
          </div>
          {result.success && (
            <div style={{ marginTop: 12 }}>
              <Link href="/" className="btn">Continue shopping</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
