import { createStore } from 'redux';
import { wishlistReducer } from './reducers/wishlistReducer';

export const store = createStore(wishlistReducer);
