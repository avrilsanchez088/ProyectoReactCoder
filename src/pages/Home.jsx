import React from 'react'
import products from "/productos.json"

import { useEffect, useState } from 'react';
import axios from 'axios';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Home = () => {
  const [products2, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/productos.json')
      .then((res) => {
        console.log('Datos obtenidos con éxito:', res.data);
        setProducts(res.data.products);
      })
      .catch((error) => console.log('Error al obtener datos:', error));
  }, []);

  return
  <ItemListContainer products={products}/>
}

export default Home;







