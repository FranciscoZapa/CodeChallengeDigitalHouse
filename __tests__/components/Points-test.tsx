import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {Points} from '../../src/components/Points';
import {ListItemStruct} from '../../src/types/List/ListTypes';

describe('Points', () => {
  it('should render correctly', () => {
    const data: Array<ListItemStruct> = [];
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <Points data={data} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
