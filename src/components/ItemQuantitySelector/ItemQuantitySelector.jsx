import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { AddItemButton } from '../AddItemButton';



export const ItenQuantitySelector = () => {
 
  const [quantity, setQuantity] = useState(1);
   
  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const handleAddProduct = () => {
    setQuantity (quantity + 1);
  }

  const handleResetQuantity = () => {
    setQuantity(1);
  };


  return (
    <div>
    <Button onClick={handleSubstractProduct}>-</Button>
    <input type="number" value={quantity} disabled/>
    <Button onClick={handleAddProduct}>+</Button>
    <AddItemButton quantity = {quantity} handleResetQuantity={handleResetQuantity} />
    </div>
  );
};

export default ItenQuantitySelector
