import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    color: '#5b5b5b',
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  total: {
    textDecorationLine: 'underline',
  },
});

export default styles;
