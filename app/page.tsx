import Link from 'next/link';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <div>
      <h1 style={{ margin: '0 0 0.75rem 0' }}>Featured Products</h1>
      <div className="grid">
        {products.map((p) => (
          <article key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <div className="card-body">
              <div className="card-title">{p.title}</div>
              <div className="price">${p.price.toFixed(2)}</div>
              <p style={{ color: '#475569' }}>{p.description}</p>
              <Link href={`/products/${p.id}`} className="btn">View details</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
