import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './SearchFavoriteScreen.css';
import { toggleItemFavorite } from '../actions';

import ItemList from './ItemList';
import FavoriteMenu from './FavoriteMenu';

const SearchFavoriteScreen = withRouter(
  ({ items, toggleFavorite, history }) => {
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
      setFilteredItems(items.filter((item) => item.isFavorite));
    }, [items]);

    return (
      <div className={styles.searchFavoriteScreen}>
        {filteredItems.length === 0 ? (
          <p className={styles.favoriteEmpty}>お気に入りはありません</p>
        ) : (
          <ItemList items={filteredItems} clickFavorite={toggleFavorite} />
        )}
        <FavoriteMenu clickBack={() => history.goBack()} />
      </div>
    );
  }
);

const mapStateToProps = (state, ownProps) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleFavorite: (id) => dispatch(toggleItemFavorite(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFavoriteScreen);
