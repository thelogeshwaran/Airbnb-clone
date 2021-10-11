import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={logout} style={styles.button}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
