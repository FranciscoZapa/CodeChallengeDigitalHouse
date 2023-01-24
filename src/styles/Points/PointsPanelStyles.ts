import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  panel: {
    backgroundColor: theme.colors.brand[900],
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 1,
    elevation: 4,
  },
  month: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.text.white,
    marginTop: 20,
    marginLeft: 20,
  },
  points: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.text.white,
    fontSize: 30,
    marginTop: 20,
    lineHeight: 30,
    alignSelf: 'center',
  },
});
