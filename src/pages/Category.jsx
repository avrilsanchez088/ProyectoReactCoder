
import React, {useEffect, useState} from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Category = () => {
    const { categoryId} = useParams()

  useEffect(() => {
    axios
      .get('../src/data/productos.json')
      .then((res) => {
        console.log('Datos obtenidos con éxito:', res.data);
        const prodFiltrados = categoryId ? res.data.filter((elem) = elem.categoria === categoryId) : res.data
        setProducts (prodFiltrados);     
      })
      .catch((error) => console.log('Error al obtener datos:', error));
  }, [categoryId]);

  return < ItemListContainer products={products}/>
  
}

export default Category;
