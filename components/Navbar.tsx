/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleCart } from '../store/cartSlice';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalItems = items.length;

  const [animate, setAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(t);
  }, [totalItems, mounted]);

  return (
    <nav
      style={{
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid #2a2520',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '1.5rem',
              color: '#f5f0e8',
              letterSpacing: '-0.02em',
            }}
          >
            Nexist
            <span style={{ color: '#e07a2f' }}>.</span>
          </h1>
          <p
            style={{
              fontSize: '0.65rem',
              color: '#5a5248',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Market
          </p>
        </div>

        {/* Cart Button */}
        <button
          onClick={() => dispatch(toggleCart())}
          style={{
            position: 'relative',
            background: 'none',
            border: '1px solid #2a2520',
            borderRadius: '8px',
            padding: '8px 16px',
            color: '#f5f0e8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.875rem',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#e07a2f')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a2520')}
        >
          {/* Cart Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Cart
          {/* Badge */}
          {mounted && totalItems > 0 && (
            <span
              className={animate ? 'badge-pop' : ''}
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#e07a2f',
                color: '#0f0f0f',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
