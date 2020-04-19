import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'ress';

import Header from './components/Header';
import MainScreen from './screens/MainScreen';
import SearchKeywordScreen from './screens/SearchKeywordScreen';
import SearchCategoryScreen from './screens/SearchCategoryScreen';
import SearchFavoriteScreen from './screens/SearchFavoriteScreen';
import NewsScreen from './screens/NewsScreen';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
library.add(faSearch, faFolder, faStar, farStar);

import items from './dummy';

const categories = [
  'Home',
  'Kids',
  'Baby',
  'Toys',
  'Clothing',
  'Beauty',
  'Shoes',
  'Jewelery',
  'Health',
  'Outdoors',
  'Garden',
  'Industrial',
  'Grocery',
  'Computers',
  'Books',
  'Music',
  'Movies',
  'Sports',
  'Games',
  'Tools',
  'Automotive',
  'Electronics',
];

const App = () => {
  // TODO: fetch
  // const items = []

  // const [favoriteItemIds, setFavoriteItemIds] = useState([]);
  const [favoriteItemIds, dispatchFavoriteItemAction] = useReducer(
    (ids, { type, targetId }) => {
      switch (type) {
        case 'add':
          console.log(`add: ${targetId}`);
          return [...ids, targetId];
        case 'remove':
          console.log(`remove: ${targetId}`);
          return ids.filter((id) => id !== targetId);
        default:
          ids;
      }
    },
    []
  );

  const addFavoriteItemId = (id) => {
    dispatchFavoriteItemAction({ type: 'add', targetId: id });
  };

  const removeFavoriteItemId = (id) => {
    dispatchFavoriteItemAction({ type: 'remove', targetId: id });
  };

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainScreen />
        </Route>
        <Route path='/news'>
          <NewsScreen />
        </Route>
        <Route path='/search_keyword'>
          <SearchKeywordScreen
            items={items}
            favoriteItemIds={favoriteItemIds}
            addFavoriteItemId={addFavoriteItemId}
            removeFavoriteItemId={removeFavoriteItemId}
          />
        </Route>
        <Route path='/search_category'>
          <SearchCategoryScreen
            items={items}
            categories={categories}
            favoriteItemIds={favoriteItemIds}
            addFavoriteItemId={addFavoriteItemId}
            removeFavoriteItemId={removeFavoriteItemId}
          />
        </Route>
        <Route path='/search_favorite'>
          <SearchFavoriteScreen
            items={items}
            favoriteItemIds={favoriteItemIds}
            removeFavoriteItemId={removeFavoriteItemId}
          />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
