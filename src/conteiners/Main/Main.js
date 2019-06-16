import React, {Component} from 'react';
import { connect } from "react-redux";
//import * as actions from "../../actions/carElementActions";
// import ReactDOM from 'react-dom';
// import Button from '../components/button/button.js';
// import Header from '../components/header/header'; 
// import HideBlock from './hideBlock.js'

import CarElement from '../../components/carElement/carElement';


export class Main extends Component {
  // state = {showBlock: false}

  // handler = () => this.setState( prevState => ({showBlock: !prevState.showBlock}))

  // state = { cars: [] };

	// componentDidMount() {
	// 	fetch("http://localhost:3000/carsInfo")
	// 		.then(response => response.json())
	// 		.then(json => this.setState({ cars: json }))
	// }

  render() {
    const { carList, getCarInfo } = this.props;
    console.log(carList)

    console.log(this.props)

    return (
      <div className="container">
        {/* {carList.map( elem =>
          <CarElement key = "" img = "" title ="" id="" />
        )} */}


        {/* <Header />
        {showBlock && <HideBlock />}

        <Button text = { showBlock ? "hide" : "show"} onClick = {this.handler} /> */}

      </div>
    )
  }
}

const mapStateToProps = state => ({
	carList: state.carInfoReducer.carList,
});

export default connect(
	mapStateToProps,
	//{ ...actions }
)(Main);