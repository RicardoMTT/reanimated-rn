import axios from 'axios';

export const getProducts = async (): Promise<any> => {
  return await axios.get('https://para-pruebas-back.herokuapp.com/productos');
};
