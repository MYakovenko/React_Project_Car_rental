import React from "react";

export default ({ id, label, onChange, onBlur, type = "text", ...rest }) => (
    <>
	<label htmlFor={id} className="input-box">{label}</label>
	<input className="input-box__input" id={id} onChange = {onChange} onBlur = {onBlur} type={type} {...rest}/>
    </>
);