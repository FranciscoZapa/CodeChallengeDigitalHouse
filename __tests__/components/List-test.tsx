import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {List} from '../../src/components/List';
import {ListItemStruct} from '../../src/types/List/ListTypes';

describe('List', () => {
  it('should render correctly', () => {
    const list: Array<ListItemStruct> = [];
    const setFilteredList = () => {};
    const navigation = {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <List
            list={list}
            setFilteredList={setFilteredList}
            navigation={navigation}
          />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
