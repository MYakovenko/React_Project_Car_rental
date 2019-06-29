import React, {Component} from 'react';
import "./confirmationMessage.css";

export default class ConfirmationMessage extends Component {
    
    state = {messageTimer: null}

    componentDidMount() {
        const {closeMessage} = this.props
        const messageTimer = setTimeout( closeMessage, 3000);
        this.setState({ messageTimer });
        document.body.classList.remove("stop-scroling")
    }
    
    componentWillUnmoumt() {
        clearTimeout(this.state.messageTimer)
    }

    render () {
        return ( 
            <div className = "background">
                <div id = "confirmation-wrapper">
                    <div className = "text">Thank you for the request!</div>
                    <div className = "text">We'll get in touch with you at first opportunity.</div>
                </div>
            </div>
        )
    }
};