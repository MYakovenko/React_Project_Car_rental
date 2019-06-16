import React from 'react'
import DropDownMenu from '../dropDownMenu/dropDownMenu.js'
import SosialIcon from '../sosialIcon/sosialIcon.js'
import "./header.css";

export default () => (
    <header className = "header">
				<nav className = "nav">
					<ul className = "menu">
						<li>
							<div className = "hamburger"><img src='./img/icons/png/menu.png' alt='hamburger'/></div>
              				<DropDownMenu />
						</li>
						<li className = "info">
							<div className = "address">
								<div>Kharkiv, 3, Sumskay st.</div>
								<div> info@drive.com</div>
							</div>
							<div><img src='img/icons/png/map.png' alt='address'/></div>
						</li>
						<li className = "info">
							<div className = "phone">
							<div>+38 (068) 089-48-83</div>
							<div>+38 (099) 554-93-65</div>
							</div>
							<div><img src='img/icons/png/phone-1.png' alt='phone'/></div>
						</li>
						<li className = "social_icons">
							<SosialIcon className = "twitter" href = "https://twitter.com/" img = "img/icons/png/Twitter-1.png"/>
							<SosialIcon className = "instagram" href = "https://www.instagram.com/" img = "img/icons/png/instagram-1.png"/>
							<SosialIcon className = "facebook" href = "https://www.facebook.com/" img = "img/icons/png/facebook-1.png" />
						</li>
					</ul>
				</nav>
	</header>
)