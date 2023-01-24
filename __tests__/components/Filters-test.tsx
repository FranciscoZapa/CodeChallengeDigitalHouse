import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {Filters} from '../../src/components/Filters';

describe('Filters', () => {
  it('should render correctly', () => {
    const filterActivated = false;
    const handleAll = () => {};
    const handleGain = () => {};
    const handleChanged = () => {};
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <Filters
            filterActivated={filterActivated}
            handleAll={handleAll}
            handleGain={handleGain}
            handleChanged={handleChanged}
          />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
