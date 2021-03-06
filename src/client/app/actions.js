export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const loginUser = (creds) => {
    const url = 'http://localhost:3001/sessions/create';
    const config = {};

    return (dispatch) => {
        return axios
            .post(url, config)
            .then((response) => {
                // set token in local storage
                try {
                    localStorage.setItem('id_token', )
                }
                dispatch(receiveLogin(user));
            })
            .catch((err) => {
                console.log(err);
            });
    }

}
