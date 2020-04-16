import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'ress';

import Header from './components/Header';
import MainScreen from './components/MainScreen';
import SearchKeywordScreen from './components/SearchKeywordScreen';
import SearchCategoryScreen from './components/SearchCategoryScreen';
import NewsScreen from './components/NewsScreen';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
library.add(faSearch, faFolder, faStar, farStar);

class App extends React.Component {
  render() {
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
          <Route>
            <div>Not Found</div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
