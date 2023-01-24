import {Box} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {BaseButton} from '../components/BaseButton';
import {DetailHeader} from '../components/DetailHeader';
import {DetailImage} from '../components/DetailImage';
import {ProductDescription} from '../components/ProductDescription';
import {ProductPoints} from '../components/ProductPoints';

type DetailScreenProps = PropsWithChildren<{
  route: any;
  navigation: any;
}>;

export const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  const {product, createdAt, points, image} = route.params;
  return (
    <Box height={'100%'}>
      <DetailHeader product={product} />
      <DetailImage image={image} product={product} />
      <ProductDescription date={createdAt} />
      <ProductPoints points={points} />
      <Box height={'15%'} justifyContent={'center'} alignItems={'center'}>
        <BaseButton
          isFull={false}
          label="Aceptar"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </Box>
    </Box>
  );
};
