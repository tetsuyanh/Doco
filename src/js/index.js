import React from 'react';
import ReactDOM from 'react-dom';
import 'ress';

import MainScreen from './components/MainScreen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faFolder);

class App extends React.Component {
  render() {
    return (
      <div>
        <MainScreen />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
