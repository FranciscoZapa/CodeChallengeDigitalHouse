import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {ListItem} from '../../src/components/ListItem';

describe('ListItem', () => {
  it('should render correctly', () => {
    const product = 'Producto 1';
    const createdAt = '2022-12-09T06:34:25.607Z';
    const points = 1;
    const image = 'https://loremflickr.com/640/480/transport';
    const is_redemption = false;
    const id = '1';
    const navigation = {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <ListItem
            product={product}
            createdAt={createdAt}
            points={points}
            image={image}
            is_redemption={is_redemption}
            id={id}
            navigation={navigation}
          />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
