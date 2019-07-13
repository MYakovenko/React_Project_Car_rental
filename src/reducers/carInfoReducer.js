import * as types from "../actionTypes/actionTypes"

const initialValue = {
    showCarFlag: false,
    showRentFormFlag: false,
    showConfirmationMessageFlag: false,
    isFetching: false,
    selectedSityFlag: false, 
    emailValidationError: false, 
    phoneValidationError: false,
    validForm: false,
    validFormData: {
      name: false,
      email: false,
      phone: false,
      city: false,
      place: false,
      pickUpDate: false,
      dropOffDate: false
    },
    item: {
        id: "",
        title: "",
        ref: "",
        engine: "",
        price: "",
        overview: ""
    },
    rentalData: {
      name: "",
      email: "",
      phone: "",
      city: "",
      place: "",
      carId: "",
      pickUpDate: "",
      pickUpTime: "",
      dropOffDate: "",
      dropOffTime: ""
    },
    rentalDataBase: {},
    carList: [],
    sityList: [],
    rentCarPlacesList: [],
    requestList: [],
};

export default (state = initialValue, action) => {

    switch (action.type) {
      
        case types.SHOW_CAR_ELEMENT: {
          const item = state.carList.find(el => el.id === action.payload);
          return {
            ...state,
            item,
            rentalData: {
              ...state.rentalData,
              carId: item.id
            },
            showCarFlag: true
          }
        }

        case types.CANCEL_CAR_ELEMENT_INFO: {
          return {
            ...state,
            showCarFlag: false,
            showRentFormFlag: false
          }
        }

        case types.SHOW_RENTAL_FORM: {
          return {
            ...state,
            showRentFormFlag: true,
            showCarFlag: false
          }
        }

        case types.CHANGE_INPUT_VALUE: {
          const {value, name} = action.payload.target

          const showPlaces = city => {
            const chousenCity = state.rentalDataBase.rentCarPlaces[city]
            const placeList = Object.keys(chousenCity).reduce((prev, elem) => {
              return prev.concat(
                chousenCity[elem]
              );
            }, []);

            return placeList
          }

          return {
            ...state,
            rentCarPlacesList: name === "city" ? showPlaces(value) : state.rentCarPlacesList,
            rentalData: {
              ...state.rentalData,
              [name]: value
            },
            validFormData: {
              ...state.validFormData,
              [name]: value.trim() === "" ? false : true
            },
            validForm: Object.keys(state.validFormData).every(elem => state.validFormData[elem])
          }
        }

        case types.ONBLUR_EMAIL_VALIDATION: {
          const {value} = action.payload.target

          const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
          const result = reg.test(value)
           return {
              ...state,
              emailValidationError: result ? false : true
            };
        }

        case types.ONBLUR_PHONE_VALIDATION: {
          const {value} = action.payload.target

          const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
          const result = reg.test(value)
          return {
              ...state,
              phoneValidationError: result ? false : true,
          }
        }

        case types.CLOSE_MESSAGE: {
          return {
            ...state,
            showConfirmationMessageFlag: false
          }
        }

        // GET Request

        case types.GET_REQUEST: {
          return state;
        }

        case types.GET_REQUEST_SUCCESS: {
          const { data } = action.payload;
          const rentalDataBase = data

          const carList = Object.keys(data.carsInfo).reduce((prev, elem) => {
            return prev.concat({
              ...data.carsInfo[elem],
              id: elem
            });
          }, []);

          const requestList = Object.keys(data.rentalRequests).reduce((prev, elem) => {
            return prev.concat({
              ...data.rentalRequests[elem],
              id: elem
            });
          }, []);

          const sityList = Object.keys(data.rentCarCities).reduce((prev, elem) => {
            return prev.concat(
              data.rentCarCities[elem]
            );
          }, []);
          return {...state, carList, sityList, requestList, rentalDataBase}
        }

        case types.GET_REQUEST_FAIL: {
          return state;
        }

        // POST Request

        case types.POST_REQUEST: {
          return { ...state, isFetching: true };
        }

        case types.POST_REQUEST_SUCCESS: {
          
          return {
            ...state,
            requestList: state.requestList.concat({
              ...state.rentalData,
              id: action.payload.data.name
            }),
            isFetching: false,
            showRentFormFlag: false,
            showConfirmationMessageFlag: true
          };
        }

        case types.POST_REQUEST_FAIL: {
          return { ...state, isFetching: false };
        }

        default:
			return state; 
    }
}
