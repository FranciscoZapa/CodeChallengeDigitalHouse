import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {ItemImage} from '../../src/components/ItemImage';

describe('ItemImage', () => {
  it('should render correctly', () => {
    const product = 'producto';
    const image = 'https://loremflickr.com/640/480/transport';
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <ItemImage product={product} image={image} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
