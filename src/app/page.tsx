import ProductCard from '../../components/ProductCard';
import Cart from '../../components/Cart';
import { products } from '../../lib/products';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px 40px',
        }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e07a2f',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: '12px',
          }}
        >
          Fresh Arrivals
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#f5f0e8',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            maxWidth: '600px',
          }}
        >
          The Market,
          <br />
          <span style={{ color: '#5a5248' }}>curated for you.</span>
        </h1>
        <p
          style={{
            marginTop: '16px',
            fontSize: '0.9rem',
            color: '#9a8f82',
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: '400px',
            lineHeight: '1.6',
          }}
        >
          Small-batch, thoughtfully sourced goods — delivered to your door.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          borderTop: '1px solid #2a2520',
        }}
      />

      {/* Products grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 24px 80px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Cart panel */}
      <Cart />
    </main>
  );
}
