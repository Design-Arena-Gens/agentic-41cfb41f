import { NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

export function GET(_: Request, { params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) return new NextResponse('Not found', { status: 404 });
  return NextResponse.json(product);
}
