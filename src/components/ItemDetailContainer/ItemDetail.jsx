import React from 'react'
import { Card } from 'react-bootstrap';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import { AddItemButton } from '../AddItemButton';


const ItemDetail = ({id, imagen, nombre, precio, descripcion}) => {
    return (
        <div>
            <Card key={id} style={{ width: '18rem', margin: 20 }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text>{precio}</Card.Text>
                </Card.Body>
                <ItemQuantitySelector/>
                
            </Card>
        </div>

    );
};

export default ItemDetail
