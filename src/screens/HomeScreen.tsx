import {Box} from 'native-base';
import React, {PropsWithChildren, useMemo, useState} from 'react';
import {ErrorMessage} from '../components/ErrorMessage';
import {Header} from '../components/Header';
import {List} from '../components/List';
import {Loading} from '../components/Loading';
import {Points} from '../components/Points';
import {useProducts} from '../hooks/useProducts';
import {styles} from '../styles/Home/HomeScreeStyles';

type HomeScreenProps = PropsWithChildren<{
  navigation: any;
}>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {data, loading, error} = useProducts();
  const [filteredList, setFilteredList] = useState([]);
  const list = useMemo(() => {
    if (filteredList && filteredList.length > 0) {
      return filteredList;
    }
    if (data && data.length > 0) {
      return data;
    }
    return [];
  }, [data, filteredList]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <Box style={styles.box}>
      <Header />
      <Points data={list} />
      <List
        list={data}
        navigation={navigation}
        setFilteredList={setFilteredList}
      />
    </Box>
  );
};
