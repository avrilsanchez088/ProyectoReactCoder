
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDocs, getFirestore, collection, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  

  useEffect (() => {
    const db = getFirestore();
    const collectionRef = collection(db, "products");

    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((error) => console.log('Error al obtener datos:', error));
  })
  
  return(
    <ItemDetail {...product} />
    
   );

  
};

export default ItemDetailContainer
