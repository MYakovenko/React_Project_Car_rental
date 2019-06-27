import React, {Component} from 'react'; 
import "./whatDoWeOffer.css";
import OfferItems from '../../components/whatDoWeOfferItem/whatDoWeOfferItem.js'
import Banner from '../../components/mainBanner/mainBanner.js'



export class WhatDoWeOffer extends Component {

  render() {

    return (
      <div className = "page-wrapper">
        <Banner img = "https://www.autodeals.pk/wp-content/uploads/2017/10/super_sports_cars-1920x1080.jpg"/>
        
        <div className = "conteiner">
          <OfferItems />

          <h2>WHAT DO WE OFFER?</h2>
            
          <div className = "main-info">
            <h3>1. Wide range of vehicles - from luxurious premium vehicles to small vehicles.</h3>
            <p>The vehicle is not a luxury item. It is a mean of transportation. Especially, when the subway could not help. You would need a nimble city vehicle in order to catch up on everything you planned.</p>
          
            <h3>2. Engines - petrol, diesel, hybrid and electric.</h3>
            <p>There is some range of clients that don’t use the vehicles with Internal Combustion Engine principally. So, the EV rental is a trend. Also, Tesla is rented by our clients for test-drives in order to ascertain the EV’s practical use in terms of real use.</p>
            <p>Sometimes it is uncomfortable to switch from petrol to diesel and vice versa. And if the one does not have a vehicle while waiting for its new ride, the car rental is a perfect decision in order not to change the driver’s skills.</p>
          
            <h3>3. Vehicle with driver.</h3>
            <p>This type of service used not only for important meetings. Imagine you have gone somewhere and your wife’s car is in service for several days. What to do in this situation? Car rental with driver is a good solution.</p>
          </div>
        </div>
      </div>

    )
  }
}