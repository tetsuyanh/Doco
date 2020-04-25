// for items
export const fetchItems = (items) => ({
  type: 'FETCH_ITEMS',
  items,
});

export const toggleItemFavorite = (id) => ({
  type: 'TOGGLE_ITEM_FAVORITE',
  id,
});
