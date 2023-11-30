
import React, {useEffect, useState} from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import axios from 'axios';

const Category = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/productos.json')
      .then((res) => {
        console.log('Datos obtenidos con éxito:', res.data);
        setProducts(res.data);
      })
      .catch((error) => console.log('Error al obtener datos:', error));
  }, []);

  return < ItemListContainer />
  
}

export default Category;
