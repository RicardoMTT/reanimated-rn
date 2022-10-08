import React, {useEffect} from 'react';
import {getProducts} from '../api/products.api';
import {View, Text} from 'react-native';

export const ProductsScreen = () => {
  const getTotalProducts = async () => {
    const resp = await getProducts();
    console.log('resp', resp.data);
  };

  useEffect(() => {
    getTotalProducts();
  }, []);

  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};
