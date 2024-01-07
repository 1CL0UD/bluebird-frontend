import { combineReducers } from 'redux';
import { wishlistReducer } from './wishlistReducer';
import { cartReducer } from './cartReducer';

const allReducers = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export default allReducers;
