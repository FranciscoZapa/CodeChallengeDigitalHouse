import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {DetailHeader} from '../../src/components/DetailHeader';

describe('DetailHeader', () => {
  it('should render correctly', () => {
    const product = 'producto';
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <DetailHeader product={product} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
