import axios from 'axios';
import swal from 'sweetalert';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_REJECT = 'LOGGING_REJECT';
export const LOGOUT = 'LOGOUT';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const loggingIn = (user, swalert) => {
  return function (dispatch) {
    dispatch({ type: LOGGING_IN })
    axios.post('http://localhost:3001/loggings/loggingIn', user)    //loguearse en el back
      .then(res => {
        console.log('respuesta del loging', res)
        if (res) {
          localStorage.setItem('profile', JSON.stringify(res.data));
        }
        //llega un objeto con email, token y mensaje. 
        //Token es  email: userRegistered.email, id: userRegistered._id }, secret

        dispatch({
          type: LOGGING_IN_SUCCESS,
          payload: res.data
        })
        return true
      }
        ,
        err => {
          dispatch({
            type: LOGGING_REJECT,
            payload: err,
          });
          swalert({
            title: err?.response?.data?.message?.message,
            text: 'Intente de nuevo',
            icon: `warning`
          })
          return false;
        }
      )
      .then(async (res) => {
        if (res) {
          const message = await JSON.parse(localStorage.getItem('profile'))
          swalert({
            title: message?.message?.message,
            text: 'Bienvenido',
            icon: `success`
          })
        }
      })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  })
  swal("Chau culiado!","");
}


export function handleChangePassword(data) {
	return function (dispatch) {
		return axios
			.put(' http://localhost:3001/loggings/changepassword ', data)
			.then(res => {
				dispatch({type: CHANGE_PASSWORD, payload: res.data});
			});
	};
}
