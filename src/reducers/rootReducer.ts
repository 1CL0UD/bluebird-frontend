import { combineReducers } from 'redux';
import { WishlistState, wishlistReducer } from './wishlistReducer';
import { CartState, cartReducer } from './cartReducer';

export interface RootState {
  wishlist: WishlistState;
  cart: CartState;
}

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

export default rootReducer;
