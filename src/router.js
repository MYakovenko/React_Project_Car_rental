import React from 'react'
import { Switch, Route } from "react-router-dom";
import Main from './conteiners/Main/Main';
import {WhatDoWeOffer} from './conteiners/WhatDoWeOffer/WhatDoWeOffer';
import {RentalTerms} from './conteiners/RentalTerms/RentalTerms.js';
import {Discount} from './conteiners/Discount/Discount';

export default () => (
	<Switch>
		<Route exact path="/" component={Main} />
		<Route exact path="/what_do_we_offer" component={WhatDoWeOffer} />
		<Route exact path="/car_rental-terms" component={RentalTerms} />
		<Route exact path="/discount" component={Discount} />
	</Switch>
);