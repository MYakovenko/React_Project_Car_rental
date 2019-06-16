import React from 'react'

export default ({className, href, img, ...rest}) => (
    // const {class, href, img} = this.props
    
    <span className = {className}>
        <a href = {href}>
            <img src = {img} alt={className}/>
        </a>
    </span>
)