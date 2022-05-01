import React from 'react';

const Button = () => {
    const click = ()=>{
        console.log("jajajajaja")
    }
    return (
        <button onClick={click}>
            click
        </button>
    );
};

export default Button;