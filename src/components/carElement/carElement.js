import React from 'react'
import "./carElement.css";

export default ({img, title, id, onClick,  ...rest}) => (
    <div id = {id} className = "car-tank" color = "#f6f1bf" onClick = {onClick} > 
        <img className = "car-image" src = {img} alt = "car"/>
        <div className = "car-title">{title}</div>
    </div>
)