import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import MainScreen from './MainScreen';
import SearchKeywordScreen from './SearchKeywordScreen';
import SearchCategoryScreen from './SearchCategoryScreen';
import SearchFavoriteScreen from './SearchFavoriteScreen';
import NewsScreen from './NewsScreen';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
library.add(faSearch, faFolder, faStar, farStar);

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

  // // const [favoriteItemIds, setFavoriteItemIds] = useState([]);
  // const [favoriteItemIds, dispatchFavoriteItemAction] = useReducer(
  //   (ids, { type, targetId }) => {
  //     switch (type) {
  //       case 'add':
  //         console.log(`add: ${targetId}`);
  //         return [...ids, targetId];
  //       case 'remove':
  //         console.log(`remove: ${targetId}`);
  //         return ids.filter((id) => id !== targetId);
  //       default:
  //         ids;
  //     }
  //   },
  //   []
  // );

  // const addFavoriteItemId = (id) => {
  //   dispatchFavoriteItemAction({ type: 'add', targetId: id });
  // };

  // const removeFavoriteItemId = (id) => {
  //   dispatchFavoriteItemAction({ type: 'remove', targetId: id });
  // };

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
          // items={items}
          // favoriteItemIds={favoriteItemIds}
          // addFavoriteItemId={addFavoriteItemId}
          // removeFavoriteItemId={removeFavoriteItemId}
          />
        </Route>
        {/* <Route path='/search_category'>
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
        </Route> */}
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
