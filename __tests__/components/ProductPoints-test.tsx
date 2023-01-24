import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {ProductPoints} from '../../src/components/ProductPoints';

describe('ProductPoints', () => {
  it('should render correctly', () => {
    const points = 10;
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <ProductPoints points={points} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
