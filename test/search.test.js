import { test } from 'node:test';
import assert from 'node:assert/strict';
import { searchOrders } from '../src/search.js';

const orders = [
  { id: 1, customer: 'Ana García' },
  { id: 2, customer: 'Ben Okafor' },
  { id: 3, customer: 'Chloé Martin' },
];

test('an empty search shows every order', () => {
  assert.equal(searchOrders(orders, '  ').length, 3);
});

test('a search finds a name as typed', () => {
  assert.deepEqual(searchOrders(orders, 'Ben').map((o) => o.id), [2]);
});

test('a search ignores capitals', () => {
  assert.deepEqual(searchOrders(orders, 'ben').map((o) => o.id), [2]);
  assert.deepEqual(searchOrders(orders, 'MARTIN').map((o) => o.id), [3]);
});

test('a cleared search box (null or undefined) shows every order', () => {
  assert.equal(searchOrders(orders, null).length, 3);
  assert.equal(searchOrders(orders, undefined).length, 3);
});
