import React from 'react';
import renderer from 'react-test-renderer';
import {HomeScreen} from '../../src/screens/HomeScreen';
import {NativeBaseProvider} from 'native-base';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const navigation = {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <HomeScreen navigation={navigation} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
