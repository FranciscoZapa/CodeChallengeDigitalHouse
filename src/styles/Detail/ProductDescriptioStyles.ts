import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-around',
    paddingLeft: 30,
  },
  title: {
    fontWeight: 'bold',
    color: theme.colors.text.gray,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 25,
  },
});
