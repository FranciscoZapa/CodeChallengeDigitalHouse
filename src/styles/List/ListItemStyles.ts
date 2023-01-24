import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 4,
  },
  section: {
    justifyContent: 'center',
  },
  data: {
    width: '45%',
  },
  points: {
    width: '14%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.text.gray,
    marginLeft: 18,
  },
  product: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 11,
  },
  signPlus: {
    fontWeight: 'bold',
    color: theme.colors.green[500],
  },
  signMinus: {
    fontWeight: 'bold',
    color: 'red',
  },
  pointsNumber: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconButton: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
