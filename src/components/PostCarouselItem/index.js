import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

export default function PostCarouselItem(props) {
  const post = props.post;
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  const gotoPage = () => {
    navigation.navigate('DetailPage', {postId: post.id});
  };
  return (
    <Pressable
      onPress={gotoPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{marginHorizontal: 5, flex: 1}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice} </Text>/night
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
