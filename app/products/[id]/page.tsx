import { getProductById } from '@/data/products';
import { notFound } from 'next/navigation';
import { AddToCart } from './parts';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) return notFound();
  return (
    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 12 }} />
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <h1 style={{ margin: 0 }}>{product.title}</h1>
        <div className="price" style={{ fontSize: '1.25rem' }}>${product.price.toFixed(2)}</div>
        <p style={{ color: '#475569' }}>{product.description}</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <AddToCart id={product.id} title={product.title} price={product.price} image={product.image} />
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';
