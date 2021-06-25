import axios from 'axios';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const ALL_BOOKINGS = 'ALL_BOOKINGS';
export const GET_BOOKING_BY_ID = 'GET_BOOKING_BY_ID';
export const PUT_BOOKING = 'PUT_BOOKING';

export function createBooking(booking) {
	return async function (dispatch) {
		const {data} = await axios.post(`http://localhost:3001/bookings/`, booking);
		dispatch({type: CREATE_BOOKING, payload: data});
	};
}

export function allBookings() {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/bookings/`);
		dispatch({type: ALL_BOOKINGS, payload: data});
	};
}

export function getBookingByAmenity(amenityId) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/bookings/${amenityId}`);
		dispatch({type: GET_BOOKING_BY_ID, payload: data});
	};
}


export function getBookingById(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/bookings/${id}`);
		dispatch({type: GET_BOOKING_BY_ID, payload: data});
	};
}

export function putBooking(id) {
	return async function (dispatch) {
		const {data} = await axios.put(
			`http://localhost:3001/bookings/${id}`
		);
		dispatch({type: PUT_BOOKING, payload: data});
	};
}