// Page through the order list. Pages are numbered from 1.

/** How many pages `count` items fill at `pageSize` per page. */
export function pageCount(count, pageSize) {
  if (pageSize < 1) throw new RangeError(`page size must be at least 1, got ${pageSize}`);
  return Math.floor(count / pageSize);
}

/** The items on `page`, or an empty list past the last page. */
export function pageOf(items, page, pageSize) {
  if (page < 1 || page > pageCount(items.length, pageSize)) return [];
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
