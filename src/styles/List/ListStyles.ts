import {StyleSheet} from 'react-native';
import {theme} from '../Theme';

export const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: theme.colors.text.gray,
    marginLeft: 18,
  },
  flatlist: {
    flex: 0,
    height: 50,
    marginVertical: 14,
  },
  listContainer: {
    marginTop: 10,
    backgroundColor: theme.colors.white,
  },
});
