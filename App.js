/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Router from './src/navigation/Router';
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default withAuthenticator(App);
