//importe o método applyMiddleware 
import { createStore, applyMiddleware } from 'redux';
//importe o redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import characterReducer from './reducers';

//aplique o middleware
const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
