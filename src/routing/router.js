// imports
import React from 'react-native';
import { Loading, Login, AddInstance, Home } from './index';

// endpoints
import loading from '../containers/misc/loading';
import login from '../containers/onboarding/login';

// route map
const ROUTE_MAP = {
  Loading: loading,
  Login: login,
  AddInstance: addInstance,
  Home: home
};

// router class
class Router {
  renderRoute(route, navigator) {
    if (!this.navigator) {
      this.navigator = navigator;
    }

    let Component = ROUTE_MAP[route.name];
    return <Component route={route} router={this} navigator={navigator} />
  }

  route(route, payload) {
    this.navigator.push({ name: route, ...payload });
  }
}

// export
export default new Router();
