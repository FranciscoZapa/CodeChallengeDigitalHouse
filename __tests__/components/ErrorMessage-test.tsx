import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {ErrorMessage} from '../../src/components/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <ErrorMessage />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
