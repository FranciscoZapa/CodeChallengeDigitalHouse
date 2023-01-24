import {useState, useEffect} from 'react';
import {getProductService} from '../services/ProductServices';

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res: any = await getProductService();
        setLoading(false);
        setData(res.data);
      } catch (e: any) {
        console.error(e);
        setError(e);
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return {data, loading, error};
};
