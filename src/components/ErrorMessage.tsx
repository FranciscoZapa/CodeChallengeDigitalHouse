import React from 'react';
import {Box, HStack, Heading} from 'native-base';
import {errorlabel} from '../utils/constants';
import {styles} from '../styles/Status/ErrorMessageStyles';

export const ErrorMessage = () => (
  <Box
    alignItems="center"
    justifyContent="space-evenly"
    height={'100%'}
    style={styles.box}>
    <HStack space={2} justifyContent="center">
      <Heading color="white" fontSize="md">
        {errorlabel}
      </Heading>
    </HStack>
  </Box>
);
