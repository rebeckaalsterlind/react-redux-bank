import reduce from '../reducers/index';
import { createStore } from 'redux';

const initialState = {saldo: 0};
export const store = createStore(reduce, initialState);