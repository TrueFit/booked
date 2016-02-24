// import
import React, {Component, View} from 'react-native';
import {reduxForm} from 'redux-form';

import {SelfBindingComponent} from '../../sugar';
import createStyle from '../../styles';
import {Login} from '../../routing';

// class
class Loading extends SelfBindingComponent {

  loadLocalStorage() {
  }

  componentWillMount() {
    this.props.router.route(Login);
  }

  render() {
    return (
      <View style={[styles.container, styles.loading]}>
      </View>
    );
  }
}

// style
const styles = createStyle({
  loading: {
    backgroundColor: '#fff'
  }
});

// map
const mapStateToProps = state => {
  return {
    urls: state.urls
  };
};

export default Loading;
