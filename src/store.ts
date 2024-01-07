import { createStore } from '@reduxjs/toolkit';
// import { wishlistReducer } from './reducers/wishlistReducer';
import allReducers from './reducers/allReducers';

const store = createStore(allReducers);

export default store;
