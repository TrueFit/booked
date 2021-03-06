// imports
import React, {Component, TouchableHighlight, Text,
  StyleSheet} from 'react-native';

// styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 25,
    marginTop: 10,
    backgroundColor: '#87C119',
    flex: 1,
    flexDirection: 'row'
  },
  buttonText: {
    flex: 1,
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '300',
    alignItems: 'center'
  }
});
// class
class ButtonClass extends Component {
  render() {
    return (
      <TouchableHighlight
      style={[styles.button, this.props.style]}
      underlayColor="gray"
      onPress={this.props.onPress}
      >
      <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

// exports
export const Button = ButtonClass;
