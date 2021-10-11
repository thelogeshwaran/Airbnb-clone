import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  searchButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  heading: {
    fontWeight: 'bold',
  },
  content: {
    color: '#8d8d8d',
    marginTop: 3,
  },
  buttonGroups: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderWidth: 1,
  },
  itemCount: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#474747',
  },
});

export default styles;
