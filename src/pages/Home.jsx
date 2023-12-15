import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getDocs, getFirestore, collection, getDoc, doc } from 'firebase/firestore';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

export const Home = () => {
  const [products, setProducts] = useState([]);
  
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
      .catch(() => setError(true))
      
  })
  
  

  return <ItemListContainer products={products}/>
}

export default Home;







