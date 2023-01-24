import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/styles/Theme';
import {Navigator} from './src/routes/Navigator';
import moment from 'moment';

moment.locale('es');

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigator />
    </NativeBaseProvider>
  );
};

export default App;
