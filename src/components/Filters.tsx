import {HStack} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {alllabel, changedlabel, gainlabel} from '../utils/constants';
import {BaseButton} from './BaseButton';

type FiltersProps = PropsWithChildren<{
  filterActivated: boolean;
  handleAll: any;
  handleGain: any;
  handleChanged: any;
}>;

export const Filters = ({
  filterActivated,
  handleAll,
  handleGain,
  handleChanged,
}: FiltersProps) => (
  <HStack
    space={4}
    justifyContent={'center'}
    alignItems={'center'}
    height={'17%'}>
    {filterActivated ? (
      <BaseButton isFull={true} label={alllabel} onPress={handleAll} />
    ) : (
      <>
        <BaseButton isFull={false} label={gainlabel} onPress={handleGain} />
        <BaseButton
          isFull={false}
          label={changedlabel}
          onPress={handleChanged}
        />
      </>
    )}
  </HStack>
);
