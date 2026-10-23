import { test } from 'node:test';
import assert from 'node:assert/strict';
import { orderDay, orderDayLabel } from '../src/orderDate.js';

test('a midday order is on its own day', () => {
  // 12:15 in New York, Oct 21 (EDT).
  assert.equal(orderDay('2026-10-21T16:15:00Z'), '2026-10-21');
});

test('the order list labels the day', () => {
  assert.equal(orderDayLabel('2026-10-21T16:15:00Z'), 'Oct 21, 2026');
});

test('the order list labels an order with no placed time', () => {
  assert.equal(orderDayLabel(undefined), 'No date');
  assert.equal(orderDayLabel(null), 'No date');
  assert.equal(orderDayLabel('not a date'), 'No date');
});

test('an order placed late in the evening stays on that evening\'s day', () => {
  // 23:30 in New York, Oct 21 (EDT) is 03:30 UTC on Oct 22.
  assert.equal(orderDay('2026-10-22T03:30:00Z'), '2026-10-21');
  // 23:30 in New York, Jan 15 (EST) is 04:30 UTC on Jan 16.
  assert.equal(orderDay('2026-01-16T04:30:00Z'), '2026-01-15');
  // 00:30 in New York, Oct 22 (EDT) is already Oct 22.
  assert.equal(orderDay('2026-10-22T04:30:00Z'), '2026-10-22');
});
