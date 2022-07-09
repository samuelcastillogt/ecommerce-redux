import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import SliderItem from './SliderItem';
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai"
const Slider = () => {
    const list = useSelector( state => state.storeReducer )
    const [literal, setLiteral] = useState(0)
    const add = ()=>{
        if(literal == 8){
            setLiteral(0)
        }else{
           setLiteral(literal +1) 
        }
    } 
    const red = ()=>{
        if(literal == 0){
            setLiteral(8)
        }else{
           setLiteral(literal -1) 
        }
    }
    return (
        <React.Fragment>
            <div className="slider-container">
                <AiFillLeftCircle onClick={red} className="selector"/>
           <div className='slider'>
            {
                list.length > 0 && <SliderItem data={list[literal]}/>
            }
            
        </div> 
        <AiFillRightCircle onClick={add} className="selector"/> 
            </div>
           
        </React.Fragment>
        
    );
};

export default Slider;