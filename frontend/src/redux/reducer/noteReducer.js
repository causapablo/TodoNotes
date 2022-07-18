import {
    CREATE_NOTE, GET_ALL_NOTES,
    GET_NOTE_DETAIL, UPDATE_NOTE,
    DELETE_NOTE, GET_ALL_CATEGORIES,
    FILTER_BY_CATEGORY, RESET_DETAIL,
    
} from "../actions/actionsCreators";

const initialState = {
    notes: [],
    notesBackUp: [],
    noteDetail: {},
    categories: [],
    
    cache: "allCategories"
};

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_NOTES: {
            return {
                ...state,
                notes: action.payload,
                notesBackUp: action.payload
            }
        }
        case GET_ALL_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case CREATE_NOTE: {
            return {
                ...state,
                notes: [...state.notes, action.payload],
                notesBackUp: [...state.notesBackUp, action.payload],
                cache: "allCategories"
            }
        }
        case UPDATE_NOTE: {
            return {
                ...state
            }
        }
        case DELETE_NOTE: {
            let filteredNotes = state.notes.filter(n=>n.id!==action.payload);
            return {
                ...state,
                notes : filteredNotes,
                notesBackUp : filteredNotes
            }
        }
        case FILTER_BY_CATEGORY: {
            let notes = state.notesBackUp;
            const filteredNotes = action.category === "allCategories" ? notes :
                notes.filter(n => {
                    let cats = n.categories.map(c=>c.category);//['cat1','cat2','cat3']
                    if(cats.includes(action.payload)){
                        return n;
                    }
                })
            return {
                ...state,
                notes : filteredNotes,
                cache : action.cat
            }
        }
        case GET_NOTE_DETAIL: {
            return {
                ...state,
                noteDetail: action.payload
                
            }
        }
        case RESET_DETAIL: {
            return {
                ...state,
                noteDetail: {}
            }
        }
        default: {
            return { ...state }
        }
    }
}
export default noteReducer;