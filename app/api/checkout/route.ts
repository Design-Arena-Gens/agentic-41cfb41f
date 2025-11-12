import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { amount } = await req.json().catch(() => ({ amount: 0 }));
  // Simulate payment processing delay
  await new Promise(r => setTimeout(r, 500));
  if (amount > 0) {
    return NextResponse.json({ success: true, message: 'Payment successful! Order confirmed.' });
  }
  return NextResponse.json({ success: false, message: 'Payment failed. Please try again.' });
}
