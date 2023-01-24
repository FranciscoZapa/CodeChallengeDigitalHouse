import moment from 'moment';
import {Box, Text} from 'native-base';
import React, {PropsWithChildren, useMemo} from 'react';
import {styles} from '../styles/Points/PointsStyles';
import {ListItemStruct} from '../types/List/ListTypes';
import {yourPoints} from '../utils/constants';
import {PointsPanel} from './PointsPanel';

type PointsProps = PropsWithChildren<{data: Array<ListItemStruct> | null}>;

export const Points = ({data}: PointsProps) => {
  const month = useMemo(() => {
    if (data && data.length > 0) {
      const orderedList = data.sort((a, b) =>
        moment(a.createdAt) > moment(b.createdAt) ? -1 : 1,
      );
      const lastMonth = moment(orderedList[0].createdAt).format('MMMM');
      return lastMonth;
    }
    return '';
  }, [data]);

  const sum = useMemo(() => {
    if (data && data.length > 0) {
      let accumulator: number = 0;
      data.forEach(item => {
        if (moment(item.createdAt).format('MMMM') === month) {
          accumulator += item.points;
        }
      });
      return accumulator;
    }
    return 0;
  }, [data, month]);

  return (
    <Box height={'25%'}>
      <Text style={styles.text}>{yourPoints}</Text>
      <PointsPanel sum={sum} month={month} />
    </Box>
  );
};
