import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const FETCH_DATA = 'FETCH_DATA';

export const getAllBooks = () => dispatch => {
  return fetch('https://www.anapioficeandfire.com/api/books')
          .then((response) => response.json())
          .then((items) => dispatch({type: FETCH_DATA, payload: items}))
}


const bookReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    books: bookReducer
});

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}
