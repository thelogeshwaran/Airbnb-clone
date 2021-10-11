import React from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';
import {useRoute} from '@react-navigation/core';

const PostScreen = () => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);
  return (
    <View>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
