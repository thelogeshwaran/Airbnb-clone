import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        styles={{
          textInput: styles.input,
        }}
        query={{
          key: 'AIzaSyBoKJkn8DSOCZbzNlTO9SqPaNcBHiGDvB0',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
