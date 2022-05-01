import React, { useState } from 'react';
import { add } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const CardItem = (props) => {
    const list = useSelector(state=> state)
    const dispatch = useDispatch()
    return (
        <div className='card-product' key={props.id}>
            <img src={props.image} alt="" />
            <p className='title-card'>{props.title}</p>
            <p className='price'>Precio: Q.{props.price}</p>
            <button onClick={()=>{
                dispatch(add(props))
            }}>Agregar al carrito</button>
            </div>
        
    );
};

export default CardItem;