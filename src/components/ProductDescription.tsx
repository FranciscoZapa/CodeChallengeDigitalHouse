import moment from 'moment';
import {Box, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/Detail/ProductDescriptioStyles';
import {productDetail} from '../utils/constants';

type ProductDescriptionProps = PropsWithChildren<{
  date: string;
}>;

export const ProductDescription = ({date}: ProductDescriptionProps) => {
  return (
    <Box height={'9%'} style={styles.box}>
      <Text style={styles.title}>{productDetail}</Text>
      <Text style={styles.text}>{`Comprado el ${moment(date).format(
        'LL',
      )}`}</Text>
    </Box>
  );
};
