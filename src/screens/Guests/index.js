import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const route = useRoute();
  const {viewport} = route.params;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.heading}>Adults</Text>
            <Text style={styles.content}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonGroups}>
            <Pressable
              onPress={() => setAdults(adults => Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.itemCount}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults => adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.heading}>Children</Text>
            <Text style={styles.content}>Ages 2-12</Text>
          </View>
          <View style={styles.buttonGroups}>
            <Pressable
              onPress={() => setChildren(children => Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.itemCount}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children => children + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.heading}>Infants</Text>
            <Text style={styles.content}>Under 2</Text>
          </View>
          <View style={styles.buttonGroups}>
            <Pressable
              onPress={() => setInfants(infants => Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.itemCount}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants => infants + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          style={styles.searchButton}
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
                params: {
                  guests: adults + children,
                  viewport: viewport,
                },
              },
            })
          }>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
