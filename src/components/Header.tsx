import {Box, Text} from 'native-base';
import React from 'react';
import {styles} from '../styles/Header/HeaderStyles';
import {welcome, userName} from '../utils/constants';

export const Header = () => {
  return (
    <Box height={'10%'} style={styles.box}>
      <Text style={styles.heading}>{welcome}</Text>
      <Text style={styles.text}>{userName}</Text>
    </Box>
  );
};
