const items = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      // return [...action.items];
      return action.items.map((item) =>
        Object.assign({}, item, { isFavorite: item.id % 5 === 3 })
      );

    case 'TOGGLE_ITEM_FAVORITE':
      return state.map((item) =>
        item.id === action.id
          ? Object.assign({}, item, { isFavorite: !item.isFavorite })
          : item
      );

    default:
      return state;
  }
};

export default items;
