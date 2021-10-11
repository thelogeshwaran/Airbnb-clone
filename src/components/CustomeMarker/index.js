import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

const CustomMarker = props => {
  const {coordinate, price, isSelected, onPress} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          ...styles.price,
          backgroundColor: isSelected ? 'black' : 'white',
        }}>
        <Text style={{color: isSelected ? 'white' : 'black'}}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
