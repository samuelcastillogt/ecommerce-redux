import React, { useState } from 'react';
import { add } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const CardItemCarrito = (props) => {
    const list = useSelector(state=> state)
    const dispatch = useDispatch()
    return (
        <div className='card-product' key={props.id}>
            <img src={props.image} alt="" />
            <p className='title-card'>{props.title}</p>
            <p className='price'>Precio: {props.price}</p>
            <button onClick={(e)=>{
                console.log(e)
            }}>Eliminar del pedido</button>
            </div>
        
    );
};

export default CardItemCarrito;