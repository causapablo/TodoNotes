import { SET_LOGIN, SET_LOGOUT, LOGGED } from "../actions/actionsCreators";
const initialState = {
	isAuthenticated: false,
	user: {},
	message: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN:
			return {
				isAuthenticated: true,
				
				user: action.payload
			}
		case SET_LOGOUT:
			return {
				isAuthenticated: false,
				user: null
				
			}
		
		case LOGGED : {
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			}
		}

		default: return state;
	}
}

export default authReducer;