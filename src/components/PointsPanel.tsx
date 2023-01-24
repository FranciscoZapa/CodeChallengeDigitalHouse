import {Box, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/Points/PointsPanelStyles';
import {pointsAbbr} from '../utils/constants';

type PointsProps = PropsWithChildren<{sum: number; month: string}>;

export const PointsPanel = ({sum, month}: PointsProps) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="90%"
      width={'100%'}>
      <Box rounded={'xl'} height="80%" width={'70%'} style={styles.panel}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.points}>
          {sum} {pointsAbbr}
        </Text>
      </Box>
    </Box>
  );
};
