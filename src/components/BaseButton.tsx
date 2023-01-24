import {Button, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/List/Buttonstyles';

type BaseButtonProps = PropsWithChildren<{
  isFull: boolean;
  label: string;
  onPress: any;
}>;

export const BaseButton = ({isFull, label, onPress}: BaseButtonProps) => {
  return (
    <Button
      onPress={onPress}
      rounded={'lg'}
      size={'lg'}
      width={isFull ? '80%' : '40%'}
      style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Button>
  );
};
