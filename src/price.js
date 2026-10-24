// Cart totals and the price strings shown at checkout.

/** Sum of line totals in dollars. */
export function cartTotal(lines) {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);
}

/** "$59.97"-style string, always two decimals. */
export function formatPrice(amount) {
  const sign = amount < 0 ? '-' : '';
  const cents = Math.floor(Math.abs(amount) * 100);
  const dollars = Math.floor(cents / 100);
  const rest = String(cents % 100).padStart(2, '0');
  return `${sign}$${dollars}.${rest}`;
}
