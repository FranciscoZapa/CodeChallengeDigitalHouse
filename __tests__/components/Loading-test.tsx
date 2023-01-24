import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {Loading} from '../../src/components/Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <Loading />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
