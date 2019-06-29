import React, {Component} from 'react';
import "./carInfo.css";
import Button from "../button/button"

export default class CarInfo extends Component {

    componentDidMount() {
        document.body.classList.add("stop-scroling")
    }

    componentWillUnmount() {
        document.body.classList.remove("stop-scroling")
    }
    
    render() {
        const {img, title, id, overview, engine, price, onClickCancel, onClickRent,  ...rest} = this.props
        return (
            <div className = "background-info">
                <div className = "car-info-wrapper">
                    <img id="car-img" className = "car-image-info" src = {img} alt = "car"/>
                    <div id = "info-conteiner" className = "info-conteiner">
                        <div id = "overview" className = "overview">{overview}</div>
                        <div id = "additional-info" className = "additional-info">
                            <div id = "engine-info" className = "engine-info">{engine}</div>
                            <div id = "price-info" className = "price-info">{price}</div>
                        </div>
                    </div>
                    <div id = "buttons-conteiner" className = "buttons-conteiner">
                        <Button text = "Cancel" id = "btn-cancel" className = "button" onClick ={onClickCancel} />
                        <Button text = "Rent" id = "btn-rent" className = "button" onClick ={onClickRent} />
                    </div>
                </div>
            </div>
        )
    }
}