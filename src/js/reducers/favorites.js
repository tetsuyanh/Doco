const favoriteItemIds = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_FAVORITE':
      return state.map((item) =>
        item.id === action.id ? { ...item, isFavorite: !item.isFavorite } : item
      );
    default:
      return state;
  }
};

export default favoriteItemIds;
