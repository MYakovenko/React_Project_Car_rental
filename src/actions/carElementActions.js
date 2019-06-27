import axios from "axios";
import * as types from "../actionTypes/actionTypes"

const URL = "https://car-rental-6aff0.firebaseio.com/";

export const showCarElement = payload => ({
    type: types.SHOW_CAR_ELEMENT,
    payload
})

export const cancelCarElementInfo = payload => ({
    type: types.CANCEL_CAR_ELEMENT_INFO,
    payload
})

export const showRentalForm = payload => ({
    type: types.SHOW_RENTAL_FORM,
    payload
})

export const submitRentalForm = payload => ({
    type: types.SUBMIT_RENTAL_FORM,
    payload
})

export const chengeInputValue = payload => ({
    type: types.CHANGE_INPUT_VALUE,
    payload
})

export const emailValidation = payload => ({
    type: types.ONBLUR_EMAIL_VALIDATION,
    payload
})

export const phoneValidation = payload => ({
    type: types.ONBLUR_PHONE_VALIDATION,
    payload
})

export const closeMessage = payload => ({
    type: types.CLOSE_MESSAGE,
    payload
})


// GET Request

const getRequest = payload => ({
	type: types.GET_REQUEST,
	payload
});

const getRequestSuccess = payload => ({
	type: types.GET_REQUEST_SUCCESS,
	payload
});

const getRequestFail = payload => ({
	type: types.GET_REQUEST_FAIL,
	payload
});

export const getPosts = () => dispatch => {
	dispatch(getRequest());
	return axios
		.get(URL + ".json")
		.then(res => dispatch(getRequestSuccess(res)))
		.catch(err => dispatch(getRequestFail(err)));
};

// POST Request

const postRequest = payload => ({
	type: types.POST_REQUEST,
	payload
});

const postRequestSuccess = payload => ({
	type: types.POST_REQUEST_SUCCESS,
	payload
});

const postRequestFail = payload => ({
	type: types.POST_REQUEST_FAIL,
	payload
});

export const createRequestPost = payload => {

	return dispatch => {
		dispatch(postRequest());

		return axios
			.post(URL + "/rentalRequests.json", payload)
			.then(res => dispatch(postRequestSuccess(res)))
			.catch(err => dispatch(postRequestFail(err)));
	};
};