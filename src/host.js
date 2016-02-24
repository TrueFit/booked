// imports
import React, { AppRegistry, Navigator, Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './containers/app';

// create the store
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// function so we can get the platform
export default (platform) => {
  // class
  class Host extends Component {
    render() {
      return (
        <Provider store={store}>
          <App platform={platform} />
        </Provider>
      );
    }
  }

  // register component
  AppRegistry.registerComponent('app', () => Host);
}
