import React from 'react'


import { useEffect, useState } from 'react';
import axios from 'axios';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Home = () => {
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

  return <ItemListContainer products={products}/>
}

export default Home;







