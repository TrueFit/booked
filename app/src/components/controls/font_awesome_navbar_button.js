import React, {Component, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import createStyle from '../../styles';

// styles
const styles = createStyle({
  icon: {
    marginLeft: 6
  }
});

// class
class FontAwesomeNavbarButtonClass extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon name={this.props.iconName} size={22}
                  color={this.props.color}
                  style={[styles.icon, this.props.style]} />
            </TouchableOpacity>
        </View>
    );
  }
}

// export
export const FontAwesomeNavbarButton = FontAwesomeNavbarButtonClass;
