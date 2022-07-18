import axios from "axios";

//App Actions
export const CREATE_NOTE = "CREATE_NOTE";
export const GET_ALL_NOTES = "GET_ALL_NOTES";
export const GET_NOTE_DETAIL = "GET_NOTE_DETAIL";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const RESET_DETAIL = "RESET_DETAIL";

//Auth Actions
export const SET_LOGIN = "SET_LOGIN";
export const LOGGED = "LOGGED";
export const SET_LOGOUT = "SET_LOGOUT";

export const postNote = (payload, token) => {
    return async (dispatch) => {


        try {
            let newNote = await axios.post(`${process.env.REACT_APP_API}/note`, payload);
            return dispatch({ type: CREATE_NOTE, payload: newNote.data })
        } catch (e) {
            console.log(e);
        }
    }
}
export const getAllNotes = (id) => {
    return async (dispatch) => {
        try {
            let allNotes = await axios.get(`${process.env.REACT_APP_API}/note/allNotes/${id}`);
            return dispatch({ type: GET_ALL_NOTES, payload: allNotes.data })
        } catch (error) {
            console.log(error)
        }
    }
}
export const deleteNote = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API}/note/${id}`);
            return dispatch({ type: DELETE_NOTE, payload: id })
        } catch (error) {
            console.log(error);
        }
    }
}




export const login = ({ email, password }) => {
    const log = { email, password };
    return async (dispatch) => {

        const result = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        console.log("Este es la data", data)
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({
            type: SET_LOGIN,
            payload: data
        })
    }
}

export const logged = (payload) => {
    return {
        type: LOGGED,
        payload
    }
}
export const logout = () => {
    localStorage.removeItem('user');
    return {
        type: SET_LOGOUT
    }
}