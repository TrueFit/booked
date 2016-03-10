// imports
import React, { Component, Navigator } from 'react-native';
import { connect } from 'react-redux';

import createStyle from '../styles';
import { setPlatform } from '../actions';

import Router from '../routing/router';
import { Loading } from '../routing';
import { Config } from '../support';

// class
class App extends Component {
  constructor(props) {
    super(props);

    // important to keep here for future views
    this.props.setPlatform(props.platform);

    Config.setPlatform(props.platform);
  }

  render() {
    const nav = (
      <Navigator style={styles.container}
        initialRoute={{name: Loading}}
        renderScene={this.renderScene}
      />
    );

    return nav;
  }

  renderScene(route, navigator) {
    return Router.renderRoute(route, navigator);
  }
}

// styles
const styles = createStyle();

// connect
export default connect(null, { setPlatform })(App);
