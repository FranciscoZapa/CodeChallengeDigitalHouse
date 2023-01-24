import React from 'react';
import renderer from 'react-test-renderer';
import {DetailScreen} from '../../src/screens/DetailScreen';
import {NativeBaseProvider} from 'native-base';

describe('DetailScreen', () => {
  it('should render correctly', () => {
    const navigation = {};
    const route = {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <DetailScreen route={route} navigation={navigation} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
