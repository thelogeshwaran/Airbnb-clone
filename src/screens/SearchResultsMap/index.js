import React, {useState, useEffect, useRef} from 'react';
import {FlatList, useWindowDimensions, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import CustomMarker from '../../components/CustomeMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flastList = useRef();
  const map = useRef();
  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 70,
  });

  const {posts} = props;

  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selected = viewableItems[0].item;
      setSelectedPlaceId(selected.id);
    }
  });
  useEffect(() => {
    if (!selectedPlaceId || !flastList) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceId);
    flastList.current.scrollToIndex({index});

    const selected = posts[index];
    const region = {
      latitude: selected.latitude,
      longitude: selected.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId, posts]);
  return (
    <View>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {posts.map(item => (
          <CustomMarker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
            isSelected={item?.id === selectedPlaceId}
            price={item.newPrice}
            onPress={() => setSelectedPlaceId(item.id)}
            r
          />
        ))}
      </MapView>
      <View style={styles.carousel}>
        <FlatList
          ref={flastList}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
