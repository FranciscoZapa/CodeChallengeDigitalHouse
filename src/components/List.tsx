import {Box, FlatList, Text} from 'native-base';
import React, {PropsWithChildren, useMemo, useState} from 'react';
import {styles} from '../styles/List/ListStyles';
import {ListItemStruct} from '../types/List/ListTypes';
import {movements} from '../utils/constants';
import {Filters} from './Filters';
import {ListItem} from './ListItem';

type ListProps = PropsWithChildren<{
  list: Array<ListItemStruct> | null;
  setFilteredList: any;
  navigation: any;
}>;

export const List = ({list, setFilteredList, navigation}: ListProps) => {
  const [filter, setFilter] = useState('all');
  const filterActivated = useMemo(() => {
    if (filter === 'all') {
      return false;
    }
    return true;
  }, [filter]);
  const filteredList = useMemo(() => {
    if (list && list.length > 0) {
      if (filter === 'all') {
        setFilteredList(list);
        return list;
      }
      const filterIsRedemption = filter === 'changed' ? true : false;
      const filtered = list.filter(
        item => item.is_redemption === filterIsRedemption,
      );
      setFilteredList(filtered);
      return filtered;
    } else {
      return [];
    }
  }, [list, filter, setFilteredList]);
  const handleAll = () => {
    setFilter('all');
  };
  const handleGain = () => {
    setFilter('gain');
  };
  const handleChanged = () => {
    setFilter('changed');
  };

  return (
    <Box height={'65%'}>
      <Text style={styles.text}>{movements}</Text>
      <Box height={'76%'} style={styles.listContainer}>
        <FlatList
          style={styles.flatlist}
          data={filteredList}
          renderItem={({item}) => (
            <ListItem
              product={item.product}
              createdAt={item.createdAt}
              points={item.points}
              image={item.image}
              is_redemption={item.is_redemption}
              id={item.id}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Box>
      <Filters
        filterActivated={filterActivated}
        handleAll={handleAll}
        handleGain={handleGain}
        handleChanged={handleChanged}
      />
    </Box>
  );
};
