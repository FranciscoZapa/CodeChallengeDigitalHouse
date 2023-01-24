import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 4,
    backgroundColor: 'red',
  },
  section: {
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.text.gray,
    marginLeft: 18,
  },
});
