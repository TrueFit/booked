// imports
import React, { Component, View, Text, TextInput } from 'react-native';
import {reduxForm} from 'redux-form';

import { SelfBindingComponent } from '../../sugar';
import createStyle from '../../styles';
import { login } from '../../actions';
import { Dashboard } from '../../routing';
import { logError } from '../../support';

import { Button } from '../../components/controls';

// class
class LogIn extends SelfBindingComponent {
  render() {
    const { handleSubmit, fields: { username, password } } = this.props;

    return (
      <View style={[styles.container, styles.contentContainer]}>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} {...username} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} {...password} />

        <Button text="Log In" onPress={handleSubmit(this.signIn)} />
        <Text style={styles.error}>{this.props.loginResult.errorMessage}</Text>
      </View>
    );
  }

  signIn(form) {
    this.props.login(form).then(() => {
      if (!this.props.loginResult.loginSuccessful) {
        return;
      }

      this.props.router.route(Dashboard);
    }).catch(logError);
  }
}

// styles
const styles = createStyle();

// map
const mapStateToProps = (state) => {
  return {
    loginResult: state.loginResult
  }
}

// export
export default reduxForm({
  form: 'LogIn',
  fields: [ 'username', 'password' ]
}, mapStateToProps, { login })(LogIn);
