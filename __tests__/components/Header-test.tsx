import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {Header} from '../../src/components/Header';

describe('Header', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <Header />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
