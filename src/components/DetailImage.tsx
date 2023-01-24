import {Box, Image} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/Detail/DetailImageStyles';

type DetailImageProps = PropsWithChildren<{image: string; product: string}>;

export const DetailImage = ({image, product}: DetailImageProps) => {
  return (
    <Box
      alignItems={'center'}
      justifyContent={'center'}
      height={'48%'}
      style={styles.box}>
      <Box
        style={styles.imageBorder}
        rounded={'lg'}
        height={'99%'}
        width={'95%'}>
        <Image
          rounded={'lg'}
          source={{
            uri: image,
          }}
          alt={product}
          height={'67%'}
          width={'63%'}
        />
      </Box>
    </Box>
  );
};
