const getAuth = () => {
    try {
        return localStorage.getItem('id_token') ? true : false;
    } catch (err) {
        console.log(err);
    }
}
const initialState = {
    isFetching: false,
    isAuthenticated: getAuth()
};

export default function authReducer (state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            })
        default:
            return state;
    }
}
