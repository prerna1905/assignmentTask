import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer, { movieByIdReducer } from './Reducer';
const rootReducer = combineReducers({
    movie: movieReducer,
    movieById: movieByIdReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));