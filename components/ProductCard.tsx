import Link from 'next/link';

export function ProductCard(props: { id: string; title: string; price: number; image: string; description?: string }) {
  return (
    <article className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-body">
        <div className="card-title">{props.title}</div>
        <div className="price">${props.price.toFixed(2)}</div>
        {props.description && <p style={{ color: '#475569' }}>{props.description}</p>}
        <Link href={`/products/${props.id}`} className="btn">View details</Link>
      </div>
    </article>
  );
}
