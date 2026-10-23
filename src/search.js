// Search the order list by customer name.

/** Orders whose customer name contains `query`. */
export function searchOrders(orders, query) {
  const needle = (query ?? '').trim();
  if (!needle) return orders;
  return orders.filter((order) => order.customer.includes(needle));
}
