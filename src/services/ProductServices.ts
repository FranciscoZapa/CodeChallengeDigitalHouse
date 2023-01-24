import {axiosInstance} from '../libs/axios';

export const getProductService = async () => {
  return await axiosInstance.get('/api/v1/products');
};
