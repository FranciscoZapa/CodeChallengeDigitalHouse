import {Box, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/Detail/ProductPointsStyles';
import {purchaseAccum} from '../utils/constants';

type ProductPointsProps = PropsWithChildren<{
  points: number;
}>;

export const ProductPoints = ({points}: ProductPointsProps) => {
  return (
    <Box height={'13%'} style={styles.box}>
      <Text style={styles.title}>{purchaseAccum}</Text>
      <Text style={styles.text}>{`${points} puntos`}</Text>
    </Box>
  );
};
