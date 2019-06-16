import React, {Component} from 'react';
import "./rentalTerms.css";
import Banner from '../../components/mainBanner/mainBanner.js'


export class RentalTerms extends Component {

  render() {

    return (
      <div className = "page-wrapper-rental-termas">
        <Banner img = "http://eskipaper.com/images/car-backgrounds-1.jpg"/>
				<div className = "conteiner-rental-termas">
					<h2>CAR RENTAL TERMS</h2>
					<div className = "info-wrapper-rental-termas">
							<h3>Renters minimal age</h3>
							<p>Minimal driver's age should be not less than 23 years old.</p>
						
							<h3>Territory of vehicle use</h3>
							<p>It is restricted to cross the border of Ukraine without the prior documentary access of DRIVE Rental company.</p>
						
							<h3>Insurance</h3>
							<p>All vehicles are insured in terms of the obliged civic liability and CASCO. Standard insurance does not cover the renter's liability in case of a traffic accident or vehicle theft.</p>
							
							<h3>Deposit</h3>
							<p>Deposit amount depends on the class of vehicle. Deposit is given while car rental contract signing and given back to the Renter while vehicle drop-off in case all contract point are fulfilled.</p>
						
							<h3>Rates</h3>
							<p>VAT, maintenance and seasonal tires change are included in the rate. Rental begins from the moment of contract signing. Delay of return for 2 hours or more considered as the next rental day.</p>
					</div>
				</div>
      </div>
    )
  }
}