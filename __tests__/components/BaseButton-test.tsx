import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {BaseButton} from '../../src/components/BaseButton';

describe('BaseButton', () => {
  it('should render correctly', () => {
    const isFull = false;
    const label = 'Todos';
    const onPress = () => {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <BaseButton isFull={isFull} label={label} onPress={onPress} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
