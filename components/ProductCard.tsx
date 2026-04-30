'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, Product } from '../store/cartSlice';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [mounted, setMounted] = useState(false);
  const [filling, setFilling] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isInCart = mounted ? items.some((i) => i.id === product.id) : false;

  const handleAdd = () => {
    if (isInCart) return;
    setFilling(true);
    setTimeout(() => {
      dispatch(addToCart(product));
      setFilling(false);
    }, 400);
  };

  return (
    <div
      style={{
        backgroundColor: '#1a1814',
        border: '1px solid #2a2520',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow =
          '0 12px 40px rgba(224, 122, 47, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
      }}
    >
      {/* Image */}
      <div
        style={{ position: 'relative', height: '180px', overflow: 'hidden' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {/* Category badge */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'rgba(15,15,15,0.85)',
            color: '#9a8f82',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '4px 8px',
            borderRadius: '4px',
            fontFamily: "'DM Sans', sans-serif",
            backdropFilter: 'blur(6px)',
          }}
        >
          {product.category}
        </span>

        {/* Already in cart badge */}
        {isInCart && (
          <span
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#e07a2f',
              color: '#0f0f0f',
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 8px',
              borderRadius: '4px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
            }}
          >
            In Cart
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '1.05rem',
            color: '#f5f0e8',
            lineHeight: '1.3',
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: '0.8rem',
            color: '#9a8f82',
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '1.5',
          }}
        >
          {product.description}
        </p>

        {/* Price + Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '12px',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.1rem',
              color: '#e07a2f',
            }}
          >
            ${product.price.toFixed(2)}
          </span>

          {/* Add to cart button with fill animation */}
          <button
            onClick={handleAdd}
            disabled={isInCart}
            style={{
              position: 'relative',
              overflow: 'hidden',
              border: isInCart ? '1px solid #2a2520' : '1px solid #e07a2f',
              borderRadius: '6px',
              padding: '7px 14px',
              fontSize: '0.78rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '500',
              cursor: isInCart ? 'not-allowed' : 'pointer',
              color: isInCart ? '#5a5248' : filling ? '#0f0f0f' : '#e07a2f',
              backgroundColor: 'transparent',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
          >
            {/* Fill animation layer */}
            {filling && (
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#e07a2f',
                  animation: 'fillBtn 0.4s ease forwards',
                  zIndex: 0,
                }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>
              {isInCart ? 'Added' : filling ? 'Adding...' : 'Add to Cart'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
