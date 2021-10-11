import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';

export default function SearchResultScreen(props) {
  const {posts} = props;
  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
