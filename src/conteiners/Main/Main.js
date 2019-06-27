import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/carElementActions";
import "./Main.css";
import Banner from '../../components/mainBanner/mainBanner.js'
import CarElement from '../../components/carElement/carElement';
import RentalForm from '../../components/rentalForm/rentalForm';
import CarInfo from '../../components/carInfoElement/carInfo';
import ConfirmationMessage from '../../components/confirmationMessage/confirmationMessage';


class Main extends Component {

  componentDidMount() {
		this.props.getPosts();
	}
 
  render() {
    const { 
      carList,
      item,
      sityList,
      rentCarPlacesList,
      rentalData,
      showCarFlag,
      showRentFormFlag,
      showConfirmationMessageFlag,
      showCarElement,
      cancelCarElementInfo,
      showRentalForm,
      chengeInputValue,
      createRequestPost,
      emailValidationError,
      phoneValidationError,
      validForm,
      emailValidation,
      phoneValidation
     } = this.props;

    return (
      <div className = "main-page-wrapper">
        <Banner className = "main_banner_block" img = "http://hdw7.com/wallpapers/91/black-car-1920x1080.jpg"> 
            <div className="main_banner_info">
              <div className="title">CAR RENTAL</div>
              <img src='img/big-logo.png' alt = "DRIVE-logo"/>
              <div className="info">THERE IS NOTHING ON THE ROAD LIKE IT</div>
              <div className="form-title">Jump in!</div>
            </div>
        </Banner>
        <h3 className = 'cars-wrapper-title'>AVAILABLE VEHICLES</h3>
        
        <div className="main-page-container">
          
          {carList.map( elem =>
            <CarElement 
              key = {elem.id} 
              img = {elem.ref} 
              title ={elem.title} 
              id={elem.id} 
              onClick={showCarElement.bind(null, elem.id)}
            />
          )}

          {showCarFlag && <CarInfo 
            img = {item.ref}
            title = {item.title}
            overview = {item.overview}
            engine = {item.engine}
            price = {item.price}
            onClickCancel = {cancelCarElementInfo}
            onClickRent = {showRentalForm}
          />}

          {showRentFormFlag && <RentalForm
            rentalData = {rentalData}
            sityList = {sityList}
            plasesList = {rentCarPlacesList}
            onChange = {chengeInputValue} 
            onClickCancel = {cancelCarElementInfo} 
            onClickProceed = {createRequestPost.bind(null, rentalData)}
            emailValidation = {emailValidation}
            phoneValidation = {phoneValidation}
            emailValidationError = {emailValidationError}
            phoneValidationError = {phoneValidationError}
            validForm = {validForm}
          />}

          {showConfirmationMessageFlag && <ConfirmationMessage />}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carList: state.carInfoReducer.carList,
  sityList: state.carInfoReducer.sityList,
  rentCarPlacesList: state.carInfoReducer.rentCarPlacesList,
  showCarFlag: state.carInfoReducer.showCarFlag,
  showRentFormFlag: state.carInfoReducer.showRentFormFlag,
  showConfirmationMessageFlag: state.carInfoReducer.showConfirmationMessageFlag,
  isFetching: state.carInfoReducer.isFetching,
  item: state.carInfoReducer.item,
  rentalData: state.carInfoReducer.rentalData,
  emailValidationError: state.carInfoReducer.emailValidationError,
  phoneValidationError: state.carInfoReducer.phoneValidationError,
  validForm: state.carInfoReducer.validForm
});

export default connect(
	mapStateToProps,
	actions
)(Main);