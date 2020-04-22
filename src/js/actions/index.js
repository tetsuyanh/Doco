// for items
export const fetchItems = (items) => ({
  type: 'FETCH_ITEMS',
  items: items,
});

export const toggleItemFavorite = (id) => ({
  type: 'TOGGLE_ITEM_FAVORITE',
  id: id,
});
