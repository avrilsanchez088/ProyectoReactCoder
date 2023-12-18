import React from 'react'
import { Card } from 'react-bootstrap';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import { AddItemButton } from '../AddItemButton';


const ItemDetail = ({id, thumbnail, title, price, description}) => {
    

    return (
        <div>
            <Card key={id} style={{ width: '18rem', margin: 20 }}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
                <ItemQuantitySelector/>
                
            </Card>
        </div>

    );
};

export default ItemDetail
