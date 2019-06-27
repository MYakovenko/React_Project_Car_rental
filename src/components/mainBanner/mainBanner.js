import React from 'react'
import "./mainBanner.css";

export default ({img, children, ...rest}) => <div className="main_banner" style={{ background: `url(${img}) right center no-repeat`,
backgroundSize: "cover" }} >{children}</div>