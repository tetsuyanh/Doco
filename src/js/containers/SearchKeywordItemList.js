import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

import { toggleItemFavorite } from '../actions';

const SearchKeywordItemList = () => {
  return <ItemList></ItemList>;
};

const mapStateToProps = (state, ownProps) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFavorite: (id) => dispatch(toggleItemFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
