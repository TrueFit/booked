import React, { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  },
  error: {
    color: 'red',
    fontSize: 18,
    marginTop: 20
  }
});

export default (viewStyle) => {
  return {
    ...styles,
    ...viewStyle
  };
}
