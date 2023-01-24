import moment from 'moment';
import {Box, HStack, Pressable, Text} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/List/ListItemStyles';
import {ItemImage} from './ItemImage';

type ListItemProps = PropsWithChildren<{
  product: string;
  createdAt: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  navigation: any;
}>;

export const ListItem = ({
  product,
  createdAt,
  points,
  image,
  is_redemption,
  id,
  navigation,
}: ListItemProps) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Detail', {
          product,
          createdAt,
          points,
          image,
        })
      }>
      <Box width={'94%'} style={styles.box} id={id}>
        <HStack space={5}>
          <Box style={styles.section}>
            <ItemImage image={image} product={product} />
          </Box>
          <Box style={[styles.section, styles.data]}>
            <Text style={styles.product}>{product}</Text>
            <Text style={styles.date}>{moment(createdAt).format('LL')}</Text>
          </Box>
          <HStack style={[styles.points]}>
            <Text style={[is_redemption ? styles.signPlus : styles.signMinus]}>
              {is_redemption ? '-' : '+'}
            </Text>
            <Text style={[styles.pointsNumber]}>{points}</Text>
          </HStack>
          <Box style={styles.section}>
            <Text style={styles.iconButton}>{'>'}</Text>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  );
};
