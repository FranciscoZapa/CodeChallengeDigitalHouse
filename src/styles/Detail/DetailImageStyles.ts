import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  box: {
    padding: 20,
  },
  imageBorder: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 1,
    elevation: 7,
  },
});
