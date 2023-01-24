import React from 'react';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';
import {PointsPanel} from '../../src/components/PointsPanel';

describe('PointsPanel', () => {
  it('should render correctly', () => {
    const sum = 0;
    const month = 'Enero';
    const tree = renderer
      .create(
        <NativeBaseProvider>
          <PointsPanel sum={sum} month={month} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
