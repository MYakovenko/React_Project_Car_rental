import React from 'react'
import { Link } from "react-router-dom";
import "./dropDownMenu.css";

const menuArray = [
    {path: "/", text: 'Main page', id: 0},
    {path: "/what_do_we_offer", text: 'What do we offer', id: 1},
    {path: "/car_rental-terms", text: 'Car rental terms', id: 2},
    {path: "/discount", text: 'Discount', id: 3}
]

export default () => (
    <div className="drop">
        <ul className="drop-menu">
            {menuArray.map(
                elem => <li key = {elem.id} className = {`menu_${elem.id}`}>
                    <Link to={elem.path}>{elem.text}</Link>
                </li>
            )}
        </ul>
    </div> 
)