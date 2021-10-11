import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={DestinationSearchScreen}
          name={'Destination Search'}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          component={GuestsScreen}
          name={'Guests'}
          options={{
            title: 'How many people?',
          }}
        />
        <Stack.Screen
          component={PostScreen}
          name={'DetailPage'}
          options={{
            title: 'Accomodation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
