import React from 'react'
import { Card } from 'react-bootstrap';


const ItemDetail = ({id, imagen, nombre, precio}) => {
    return (
        <div>
            <Card key={id} style={{ width: '18rem', margin: 20 }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ItemDetail
