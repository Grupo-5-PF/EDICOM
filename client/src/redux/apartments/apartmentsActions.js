import axios from 'axios';

export const Actions = {
	CREATE_APARTMENT: 'createApartment',
	ALL_APARTMENTS: 'allApartments',
	GET_APARTMENT: 'getApartment',
};
//let todoId = 1
//Importar constantes para evitar errores de tipeo
//
export function createApartment(apartment) {
	return async function (dispatch) {
		const {data} = await axios.post(
			`http://localhost:3001/apartments/`,
			apartment
		);
		console.log('createApartment', data);
		dispatch({type: Actions.CREATE_APARTMENT, payload: data});
	};
}

export function getApartmentById(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/apartments/${id}`);
		console.log('Get Apartment ', id);
		dispatch({type: Actions.GET_APARTMENT, payload: data});
	};
}


export function getAllApartments() {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/apartments/`);
		console.log('All Apartments', data);
		dispatch({type: Actions.ALL_APARTMENTS, payload: data});
	};
}

export function updateApartment(data){
  console.log("ID", data.id , "DATA", data);
  return async function (dispatch) {
    const response = await axios.put(`http://localhost:3001/apartments/${data.id}`, data);
    console.log("pinchila")
    dispatch({ type: Actions.GET_APARTMENT, payload: response});
  }
}

export function editApartment(apartment) {
	return async function (dispatch) {
		const {data} = await axios.put(`http://localhost:3001/apartments/`);
		console.log('All Apartments', data);
		dispatch({type: Actions.ALL_APARTMENTS, payload: data});
	}
}

