import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyCoupon, findCoupon } from '../src/coupon.js';

test('a known code takes its percentage off', () => {
  assert.equal(applyCoupon(40, 'FALL25'), 30);
});

test('an unknown code changes nothing', () => {
  assert.equal(findCoupon('NOPE'), null);
  assert.equal(applyCoupon(40, 'NOPE'), 40);
});

test('a code works however the customer capitalises it', () => {
  assert.equal(applyCoupon(40, 'fall25'), 30);
  assert.equal(applyCoupon(40, ' Welcome10 '), 36);
});

test('a checkout with no coupon code keeps its amount', () => {
  assert.equal(findCoupon(undefined), null);
  assert.equal(findCoupon(null), null);
  assert.equal(applyCoupon(20, undefined), 20);
  assert.equal(applyCoupon(20, null), 20);
});
