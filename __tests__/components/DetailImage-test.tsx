import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {DetailImage} from '../../src/components/DetailImage';

describe('DetailImage', () => {
  it('should render correctly', () => {
    const product = 'producto';
    const image = 'https://loremflickr.com/640/480/transport';
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <DetailImage product={product} image={image} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
