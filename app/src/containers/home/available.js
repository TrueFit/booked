// imports
import React, {Component, View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import {SelfBindingComponent} from '../../sugar';
import createStyle from '../../styles';
import * as AvailableActions from '../../actions';
import {logError} from '../../support';

import {Button} from '../../components/controls';

// styles
const styles = createStyle({
  availableContainer: {
    backgroundColor: '#004358'
  },
  nameContainer: {
    flex: 3,
    paddingTop: 50,
    paddingLeft: 5
  },
  name: {
    paddingLeft: 15,
    fontSize: 60,
    fontWeight: '300',
    color: 'white'
  },
  freeUntil: {
    paddingLeft: 25,
    fontSize: 20,
    color: 'white',
    fontWeight: '200'
  },
  actionContainer: {
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  action: {
    fontSize: 35,
    color: 'white',
    fontWeight: '300'
  },
  time: {
    fontSize: 35,
    paddingLeft: 15,
    color: 'white',
    fontWeight: '300'
  }
});

// class
class Available extends SelfBindingComponent {
  render() {
    const {room} = this.props;

    return (
      <View style={[styles.container, styles.availableContainer]}>
      <View style={[styles.nameContainer]}>
        <Text style={styles.name}>{this.props.room.name}</Text>
        <Text style={styles.freeUntil}>open until</Text><Text style={styles.time}> {moment(this.props.room.freeUntil).format('h:mm a')}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Button text="its happening"></Button>
      </View>

      </View>
    );
  }
}

// map
const mapStateToProps = state => {
  return {
    room: state.room
  };
};

// export
export default connect(mapStateToProps)(Available);
