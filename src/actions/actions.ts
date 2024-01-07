import { CarType } from '../hooks/useData';
import { Action } from '../reducers/wishlistReducer';
import { CartAction } from '../reducers/cartReducer';

export const addWishlist = (wishlist: CarType): Action => ({
  type: 'ADD_WISHLIST',
  payload: wishlist,
});

export const addCart = (cart: CarType): CartAction => ({
  type: 'ADD_CART',
  payload: cart,
});
