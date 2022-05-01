import React from 'react';
import "./style.css"
const NavItem = (props) => {
    return (
        <li className='uno'>
            {props.title}
        </li>
    );
};

export default NavItem;