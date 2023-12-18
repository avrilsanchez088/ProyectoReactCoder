
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDocs, getFirestore, collection, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  

 useEffect(() => {
        const db = getFirestore();
        const collectionRef = doc(db, "products", productId);

        getDoc(collectionRef)
           .then((res) => {
            const data = {
                id: res.id,
                ...res.data(),
            };
            setProduct(data);
           })
           .catch((error) => console.log('Error al obtener datos:', error));
    }, [productId]);
  
  return(
    <ItemDetail {...product} />
    
   );

  
};

export default ItemDetailContainer
