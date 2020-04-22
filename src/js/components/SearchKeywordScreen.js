import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SearchKeywordItemList from '../containers/SearchKeywordItemList';
import styles from './SearchKeywordScreen.css';

const SearchKeywordScreen = withRouter((props) => {
  const [keyword, setKeyword] = useState('');

  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.searchKeywordScreen}>
      <SearchKeywordItemList />
      <div className={styles.operation}>
        <form className={styles.form}>
          <input
            type='text'
            className={styles.input}
            value={keyword}
            placeholder='キーワードを入力'
            onChange={changeKeyword}
          />
        </form>
        <div className={styles.backWrapper}>
          <button
            className={styles.back}
            onClick={() => props.history.goBack()}
          >
            もどる
          </button>
        </div>
      </div>
    </div>
  );
});

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchKeywordScreen);

export default SearchKeywordScreen;
