import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

export default function Post(props) {
  const post = props.post;
  const navigation = useNavigation();
  const gotoPage = () => {
    navigation.navigate('DetailPage', {postId: post.id});
  };
  return (
    <Pressable onPress={gotoPage}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>
        <Text style={styles.description}>
          {post.type}. {post.title}
        </Text>
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice} </Text>
          <Text style={styles.newPrice}> ${post.newPrice} </Text>/night
        </Text>
        <Text style={styles.total}>
          ${post.newPrice * 7} total (for 7 days)
        </Text>
      </View>
    </Pressable>
  );
}
