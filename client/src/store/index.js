import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from '@redux-devtools/extension';
import { reducers } from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnchancer = 
    process.env.Node_ENV === 'production'
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(reducers, composeEnchancer);

