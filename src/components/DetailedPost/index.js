import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

export default function DetailedPost(props) {
  const post = props.post;
  return (
    <ScrollView>
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
        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
}
