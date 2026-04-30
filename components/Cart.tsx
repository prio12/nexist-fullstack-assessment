'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart, closeCart } from '../store/cartSlice';
import Image from 'next/image';

export default function Cart() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(closeCart())}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 200,
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Cart Panel */}
      <div
        className="cart-open"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#1a1814',
          borderLeft: '1px solid #2a2520',
          zIndex: 300,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid #2a2520',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.4rem',
                color: '#f5f0e8',
              }}
            >
              Your Cart
            </h2>
            <p
              style={{
                fontSize: '0.75rem',
                color: '#9a8f82',
                fontFamily: "'DM Sans', sans-serif",
                marginTop: '2px',
              }}
            >
              {items.length === 0
                ? 'Nothing here yet'
                : `${items.length} item${items.length > 1 ? 's' : ''} selected`}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => dispatch(closeCart())}
            style={{
              background: 'none',
              border: '1px solid #2a2520',
              borderRadius: '6px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9a8f82',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#e07a2f';
              e.currentTarget.style.color = '#e07a2f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2520';
              e.currentTarget.style.color = '#9a8f82';
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Empty State */}
        {items.length === 0 ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              padding: '40px',
            }}
          >
            {/* Empty illustration */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#0f0f0f',
                border: '1px solid #2a2520',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5a5248"
                strokeWidth="1.2"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.1rem',
                  color: '#f5f0e8',
                  marginBottom: '6px',
                }}
              >
                Your cart is empty
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: '#5a5248',
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: '1.5',
                }}
              >
                Browse the market and add something you love.
              </p>
            </div>
            <button
              onClick={() => dispatch(closeCart())}
              style={{
                marginTop: '8px',
                border: '1px solid #e07a2f',
                borderRadius: '6px',
                padding: '9px 20px',
                backgroundColor: 'transparent',
                color: '#e07a2f',
                fontSize: '0.8rem',
                fontFamily: "'DM Sans', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.03em',
              }}
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    backgroundColor: '#0f0f0f',
                    borderRadius: '8px',
                    padding: '12px',
                    border: '1px solid #2a2520',
                    alignItems: 'center',
                  }}
                >
                  {/* Item image */}
                  <div
                    style={{
                      position: 'relative',
                      width: '56px',
                      height: '56px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="56px"
                    />
                  </div>

                  {/* Item info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '0.95rem',
                        color: '#f5f0e8',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: '#e07a2f',
                        fontFamily: "'DM Sans', sans-serif",
                        marginTop: '2px',
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                      background: 'none',
                      border: '1px solid #2a2520',
                      borderRadius: '6px',
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#5a5248',
                      flexShrink: 0,
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#e07a2f';
                      e.currentTarget.style.color = '#e07a2f';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2a2520';
                      e.currentTarget.style.color = '#5a5248';
                    }}
                    title="Remove item"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14H6L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4h6v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '20px 24px',
                borderTop: '1px solid #2a2520',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Total */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#9a8f82',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '1.3rem',
                    color: '#f5f0e8',
                  }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout button */}
              <button
                style={{
                  backgroundColor: '#e07a2f',
                  color: '#0f0f0f',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '0.875rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '600',
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#c96a1f')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#e07a2f')
                }
              >
                Proceed to Checkout
              </button>

              {/* Clear cart */}
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#5a5248',
                  fontSize: '0.75rem',
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e07a2f')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5a5248')}
              >
                Clear entire cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
