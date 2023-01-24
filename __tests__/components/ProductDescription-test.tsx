import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {ProductDescription} from '../../src/components/ProductDescription';

describe('ProductDescription', () => {
  it('should render correctly', () => {
    const date = '2022-12-09T06:34:25.607Z';
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <ProductDescription date={date} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
