import React from 'react'
import { Card } from 'react-bootstrap';

export const ItemDetailContainer = ({products = [] }) => {
  return (
    <Card key={product.id} style={{ width: '18rem', margin: 20 }}>
    <Card.Img variant="top" src={product.imagen} />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>{product.precio}</Card.Text>
    </Card.Body>
  </Card>
  );
};


