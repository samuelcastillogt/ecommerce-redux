import React from 'react';
import { useSelector } from 'react-redux';
import CardItemCarrito from '../component/CardItemCarrito';
const Carrito = () => {
    const items = useSelector(state=> state.carrtioReducer)
    console.log(items)
    if(items.length <= 0){
       return(
           <div style={{
               fontSize: "2em",
               display: "flex",
               justifyContent: "center",
               alignItem: "center"
           }}>
            Usted no tiene articulos en su carrito
        </div>
       ) 
    }else{
        console.log(items)
         return (
        <div >
            {items.length > 0 && items.map(item=> (<CardItemCarrito 
                                        title={item.title} 
                                        key={item.id} 
                                        price={item.price} 
                                        image={item.image} 
                                        onClick={(e)=>{
                                            console.log(e.target)
                                        }}
                                        />))}
        </div>
    );
    }
   
};

export default Carrito;