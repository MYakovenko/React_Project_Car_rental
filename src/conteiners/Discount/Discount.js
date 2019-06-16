import React, {Component} from 'react';
import "./discount.css";
import Banner from '../../components/mainBanner/mainBanner.js'



export class Discount extends Component {

  render() {

    return (
      	<div className = "page-wrapper">
        		<Banner img = "https://images.wallpaperscraft.com/image/lamborghini_huracan_red_side_view_106558_1920x1080.jpg"/>

				<div className = "conteiner-discount">
					<h2>DISCOUNT</h2>
					<div className = "info-wrapper-discount">
						<p>Looking for unbeatable deals on a car rental? Rent a car with DRIVE for a long period and you'll save up to 30%* on your rental car reservation.</p>
					
						<table>
							<caption>Rent a car for a period more, then:</caption>
							<tbody>
								<tr> 
									<th>Days</th> 
									<th>Discount</th> 
								</tr>
								<tr> 
									<td>5 days</td> 
									<td>10%</td>
								</tr>
								<tr> 
									<td>10 days</td>
									<td>20%</td>
								</tr>
								<tr>
									<td>20 days</td>
									<td>30%</td>
								</tr>
							</tbody>
						</table>
				  	</div>
				</div>
		</div>
    )
  }
}