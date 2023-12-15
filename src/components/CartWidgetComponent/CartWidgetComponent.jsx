import React from "react";
import { CartContext } from "../../context"
import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    
    const { itemCount } = useContext(CartContext);
    
    const iconStyles = {
        fontSize: "1.2rem",

    };
    return (
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span style={{ fontSize: "1.2rem" }}> {itemCount} </span>
        </div>
    )
}

export default CartWidget