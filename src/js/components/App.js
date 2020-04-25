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
          <SearchKeywordScreen />
        </Route>
        <Route path='/search_category'>
          <SearchCategoryScreen />
        </Route>
        <Route path='/search_favorite'>
          <SearchFavoriteScreen />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
