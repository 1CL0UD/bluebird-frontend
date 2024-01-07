import { CarType } from '../hooks/useData';
import {
  DeleteWishlistAction,
  WishlistAction,
} from '../reducers/wishlistReducer';
import { CartAction } from '../reducers/cartReducer';

export const addWishlist = (wishlist: CarType): WishlistAction => ({
  type: 'ADD_WISHLIST',
  payload: wishlist,
});

export const addCart = (cart: CarType): CartAction => ({
  type: 'ADD_CART',
  payload: cart,
});

export const deleteWishlist = (vehicle: string): DeleteWishlistAction => ({
  type: 'DELETE_WISHLIST',
  payload: vehicle,
});
