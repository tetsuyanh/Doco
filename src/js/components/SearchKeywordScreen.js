import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './SearchKeywordScreen.css';
import { toggleItemFavorite } from '../actions';

import ItemList from './ItemList';
import TextMenu from './TextMenu';

const SearchKeywordScreen = withRouter(({ items, toggleFavorite, history }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    console.log('keyword:' + keyword);
    if (keyword === '') {
      setFilteredItems(items);
    }
    const regexp = new RegExp('^' + keyword);
    setFilteredItems(items.filter((item) => item.name.match(regexp)));
  }, [items, keyword]);

  const updateKeyword = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <div className={styles.searchKeywordScreen}>
      <ItemList items={filteredItems} clickFavorite={toggleFavorite} />
      <TextMenu
        placeholder='キーワードを入力'
        updateText={updateKeyword}
        clickBack={() => history.goBack()}
      />
    </div>
  );
});

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
)(SearchKeywordScreen);
