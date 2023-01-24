import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand[900],
  },
  buttonLabel: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
