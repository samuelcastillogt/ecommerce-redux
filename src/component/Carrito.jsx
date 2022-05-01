import React from 'react';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
const CarritoContainer = () => {
    const items = useSelector(state=> state.carrtioReducer)
    return (
        <div className='containerCarrito'>
              <Link to={"/carrito"} className="carrito"><i className="material-icons">shopping_cart</i>
                <span>{items.length > 0 && items.length}</span>
            </Link> 
        </div>
    );
};

export default CarritoContainer;