import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection, getDoc, doc, where } from 'firebase/firestore';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { query } from 'firebase/firestore';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  
  useEffect (() => {
    const db = getFirestore();
    const collectionRef = !categoryId
    ? collection(db, "products")
    : query(
      collection(db, "products"),
      where("category", "==", categoryId)
    );

    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      
  }, [categoryId])
  
  

  return <ItemListContainer products={products}/>
}

export default Home;







