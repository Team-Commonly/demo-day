// Shipping cost by cart subtotal.

export const FREE_SHIPPING_FROM = 50;
export const FLAT_SHIPPING = 5.99;

/** Shipping for a cart subtotal in dollars: free from $50 up. */
export function shippingFor(subtotal) {
  return subtotal > FREE_SHIPPING_FROM ? 0 : FLAT_SHIPPING;
}
