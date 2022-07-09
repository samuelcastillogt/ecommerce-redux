import React, { useEffect, useState } from "react";
import Hero from "../component/Hero";
import CardItem from "../component/CardItem";
import Loading from "../component/Loading";
import CarritoContainer from "../component/Carrito";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../actions";
import Slider from "../component/Slider";
const Index = ()=>{
    const items = useSelector( state => state.storeReducer ) 
    const [loading, setLoading] = useState(true)
    const [categoria, setCategoria] = useState(false)
    const [categorie, setCategorie] = useState("All categories")
    const dispatch = useDispatch()
    const categorias =  [
        "All categories",
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]
    useEffect(async ()=>{
        window.scrollTo(0, 0)
        dispatch(getAll())
        setLoading(false)
     } , [])
    const filtroCategoria = (category)=>{
        if(category == "All categories"){
            setCategoria(false)
        }else{
            const filtro = items.filter(item => item.category == category)
        setCategoria(filtro)
        }
        
    }
    if(loading){
       return(
            <Loading />
        )
    }else{

         return(
            <React.Fragment>
                <Slider />
                <select  className="select" onChange={(e)=>{
                    filtroCategoria(e.target.value)
                }}>
                    {
                        categorias.map(item=> <option value={item}>{item}</option>)
                    }
                        
                </select>
                <div className="main">
                    
                { (items.length >= 1 && !categoria )&&
                    items.map(item=> (<CardItem 
                                        title={item.title} 
                                        key={item.id} 
                                        price={item.price} 
                                        image={item.image} 
                                        onClick={()=>{
                                            console.log("hola")
                                        }}
                                        />))
                }
                 { (categoria)&&
                    categoria.map(item=> (<CardItem 
                                        title={item.title} 
                                        key={item.id} 
                                        price={item.price} 
                                        image={item.image} 
                                        onClick={()=>{
                                            console.log("hola")
                                        }}
                                        />))
                }
            </div>
            <CarritoContainer />
            </React.Fragment>
            
        )
    }
        
   
} 
export default Index