import {Box, Heading} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/Detail/DetailScreenStyles';

type DetailHeaderProps = PropsWithChildren<{
  product: string;
}>;

export const DetailHeader = ({product}: DetailHeaderProps) => {
  return (
    <Box height={'15%'} style={styles.title}>
      <Heading style={styles.title}>{product}</Heading>
    </Box>
  );
};
