// Coupon codes typed at checkout.

const COUPONS = {
  WELCOME10: { percentOff: 10 },
  FALL25: { percentOff: 25 },
};

/** The coupon for a typed code, or null when there is none. */
export function findCoupon(code) {
  return COUPONS[code.trim()] || null;
}

/** The price after a coupon, in dollars. */
export function applyCoupon(amount, code) {
  const coupon = findCoupon(code);
  return coupon ? amount * (1 - coupon.percentOff / 100) : amount;
}
