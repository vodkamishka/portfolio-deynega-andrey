import React from 'react';
import './sign.css';

export default function Sign({minus, changedSign, english}) {
   const stylePlus = {
       opacity: minus ? '0' : '1',
       
   }
   const styleMinus = {
    opacity: minus ? '1' : '0',
    
}
    return (
        <div className = 'sign'
        title = {english ? 'Change panel color' : 'Изменить цвет панели'}
        onClick = {changedSign}
        >
             <i className="fas fa-minus"
             style = { styleMinus }
             ></i> 
             <i className="fas fa-plus"
             style = { stylePlus }
             ></i> 
        </div>
    )
}
