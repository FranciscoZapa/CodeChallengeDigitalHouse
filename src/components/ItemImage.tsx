import {Image} from 'native-base';
import React, {PropsWithChildren} from 'react';

type ImageProps = PropsWithChildren<{image: string; product: string}>;

export const ItemImage = ({image, product}: ImageProps) => {
  return (
    <Image
      rounded={'lg'}
      source={{
        uri: image,
      }}
      alt={product}
      size="sm"
    />
  );
};
