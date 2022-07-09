import React from 'react';

const SliderItem = (props) => {
    const data = props.data
    return (
        <div className='hero-card'>
            <div className='card-contend'>
               <h2>{data.title}</h2>
            <p>Q.{data.price}</p> 
            </div>
            <div className="imgContainer">
                <img src={data.image} />
            </div>
        </div>
    );
};

export default SliderItem;