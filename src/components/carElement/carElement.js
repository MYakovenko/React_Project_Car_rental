import React from 'react'
import "./carElement.css";

export default ({img, title, id,  ...rest}) => (
    <div id = {id} className = "car-tank" color = "#f6f1bf"> 
        <img className = "car-image" src = {img} />
        <div className = "car-title">{title}</div>
    </div>
)