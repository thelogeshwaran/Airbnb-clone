import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/core';
import {getPost} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

const PostScreen = () => {
  const route = useRoute();
  const [post, setPost] = useState('');

  useEffect(() => {
    fetchPost(route.params.postId);
  }, [route.params.postId]);
  console.log('hello');

  async function fetchPost(id) {
    const response = await API.graphql(graphqlOperation(getPost, {id}));
    setPost(response.data.getPost);
  }
  return (
    <View>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
