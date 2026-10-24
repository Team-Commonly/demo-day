import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal, formatPrice } from '../src/price.js';

test('whole and half dollars keep two decimals', () => {
  assert.equal(formatPrice(5), '$5.00');
  assert.equal(formatPrice(12.5), '$12.50');
});

test('a cart sums its lines', () => {
  assert.equal(cartTotal([{ unitPrice: 2, quantity: 3 }, { unitPrice: 1.5, quantity: 2 }]), 9);
});

test('a negative amount prints as a minus sign before the same string', () => {
  assert.equal(formatPrice(-5.5), '-$5.50');
  assert.equal(formatPrice(-0.25), '-$0.25');
  assert.equal(formatPrice(-5), '-$5.00');
  assert.equal(formatPrice(-12.5), '-$12.50');
  assert.equal(formatPrice(0), '$0.00');
  assert.equal(formatPrice(-0), '$0.00');
});

test('a refund line on a cart shows as a negative total', () => {
  assert.equal(formatPrice(cartTotal([{ unitPrice: 20, quantity: 1 }, { unitPrice: -5.5, quantity: 1 }])), '$14.50');
});

test('checkout shows the exact total, never a cent short', () => {
  // Three items at $19.99.
  assert.equal(formatPrice(cartTotal([{ unitPrice: 19.99, quantity: 3 }])), '$59.97');
  assert.equal(formatPrice(1.15), '$1.15');
});
