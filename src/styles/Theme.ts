// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#334FFA',
  },
  text: {
    white: '#ffffff',
    gray: '#9B9898',
    black: '#000000',
  },
  background: '#fbf9f6',
  magenta: '#CFD6FF',
};
export const theme = extendTheme({colors: newColorTheme});
