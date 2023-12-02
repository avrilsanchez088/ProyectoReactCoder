import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams()
  console.log(productId)

  useEffect(() => {
    axios
    axios.get('/src/data/productos.json')
      .then((res) => {
        const foundProduct = res.data.find((elem) => elem.id === parseInt (productId));
        setProduct(foundProduct);
      })
      .catch((error) => console.log('Error al obtener datos:', error));
  }, [productId]);

  return(
   <ItemDetail {...product} />
   
  );
};

export default ItemDetailContainer
