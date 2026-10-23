// The calendar day an order belongs to, as the store's staff see it.
//
// Orders are stored with UTC timestamps; the store runs on its own local time.

export const STORE_TIME_ZONE = 'America/New_York';

/** The order's day in YYYY-MM-DD, for receipts and the daily report. */
export function orderDay(placedAt) {
  return new Date(placedAt).toISOString().slice(0, 10);
}

/** "Oct 21, 2026"-style label for the order list. */
export function orderDayLabel(placedAt) {
  // Draft orders may have no placed time; don't let one row break the list.
  if (placedAt == null || Number.isNaN(new Date(placedAt).getTime())) return 'No date';
  const [year, month, day] = orderDay(placedAt).split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[month - 1]} ${day}, ${year}`;
}
