import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shippingFor } from '../src/shipping.js';

test('a small cart pays flat shipping', () => {
  assert.equal(shippingFor(20), 5.99);
});

test('a large cart ships free', () => {
  assert.equal(shippingFor(80), 0);
});

test('a cart of exactly $50 ships free, as the banner promises', () => {
  assert.equal(shippingFor(50), 0);
});
