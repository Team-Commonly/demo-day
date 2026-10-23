import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pageCount, pageOf } from '../src/paginate.js';

const orders = Array.from({ length: 10 }, (_, i) => `order-${i + 1}`);

test('the first page holds the first orders', () => {
  assert.deepEqual(pageOf(orders, 1, 3), ['order-1', 'order-2', 'order-3']);
});

test('a list that fills its pages exactly has no extra page', () => {
  assert.equal(pageCount(9, 3), 3);
  assert.deepEqual(pageOf(orders, 5, 3), []);
});

test('the last orders are on a page of their own when they do not fill it', () => {
  assert.equal(pageCount(10, 3), 4);
  assert.deepEqual(pageOf(orders, 4, 3), ['order-10']);
});

test('a page size below 1 is rejected instead of counting Infinity pages', () => {
  assert.throws(() => pageCount(5, 0), RangeError);
  assert.throws(() => pageCount(5, -3), RangeError);
  assert.throws(() => pageOf(orders, 1, 0), RangeError);
});
