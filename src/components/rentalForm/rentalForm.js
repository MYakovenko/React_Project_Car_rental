import React from 'react'
import "./rentalForm.css";
import Input from "../input/input";
import Button from "../button/button"

export default ({
	rentalData, 
	sityList, 
	plasesList, 
	onClickCancel, 
	onClickProceed, 
	onChange, 
	emailValidation, 
	phoneValidation, 
	emailValidationError, 
	phoneValidationError, 
	validForm,
	 ...rest}) => (
				<div className = "background">
					<div className = "rent-wrapper">
						<h2 id = "rent-title">RESERVATION</h2>
						<div id = "input-holder" className = "input-holder">
							<form id = "rent-form" name = "rent-form" action = "http://localhost:3000/rentalRequests" method = "POST">
									<div id = "name-error" className = "error"></div>
									<Input 
										id = "input-name" 
										onChange = {onChange}
										label = "Name*" 
										placeholder="Jon Duglas"
										name="name"
										value = {rentalData.name}
										required 
									/>
									<br />

									{emailValidationError ? <div id = "email-error" className = "error">Enter a valid email</div> : null }
									<Input 
										id = "input-email" 
										type="email" 
										onChange = {onChange}
										onBlur = {emailValidation} 
										label = "E-mail*" 
										placeholder="jonduglas@mail.com"
										name="email"
										value = {rentalData.email}
										required 
									/>
									<br />

									{phoneValidationError ? <div id = "phone-error" className = "error">Enter a valid phone number</div> : null }
									<Input 
										id = "input-phone" 
										onChange = {onChange}
										onBlur = {phoneValidation}
										label = "Phone*" 
										placeholder="+38-067-329-26-26"
										name="phone"
										value = {rentalData.phone}
										required
									/>
									<br />

									<label htmlFor="city-select">City*</label>
									<select id="city-select" onChange = {onChange} name="city" required>
										{sityList.map( elem => 
											<option key = {elem} value = {elem}> {elem} </option>)}
									</select> 
									<br />

									<label htmlFor="place-select">Place*</label>
									<select id="place-select" onChange = {onChange} name="place" required>
										{plasesList.map( elem => 
											<option key = {elem} value = {elem}> {elem} </option>)}
									</select> 
									<br />

									<label className = "date" htmlFor="pick-up-date">PICK UP DATE AND TIME*</label>
									<label className = "date" htmlFor="drop-off-date">DROP OFF DATE AND TIME*</label> 
									<br />

									<input id = "pick-up-date"  onChange = {onChange} type = "date" name = "pickUpDate" required/>
									<input id = "drop-off-date"  onChange = {onChange} type = "date" name = "dropOffDate" required/> 
									<br />	
									<input id = "pick-up-time"  onChange = {onChange} type = "time" name = "pickUpTime"/>
									<input id = "drop-off-time"  onChange = {onChange} type = "time" name = "dropOffTime"/>
									<br />

									<div className = "button-wrapper">
										<Button text = "Cancel" id = "btn-cancel" className = "button" onClick ={onClickCancel} />
										<Button disabled = {!validForm} text = "Proceed" id = "btn-rent" className = "button" onClick ={onClickProceed} />
									</div>
							</form>
						</div>
					</div>
				</div>
)