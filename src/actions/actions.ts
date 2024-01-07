import { CarType } from '../hooks/useData';
import { Action } from '../reducers/wishlistReducer';

export const addWishlist = (wishlist: CarType): Action => ({
  type: 'ADD_WISHLIST',
  payload: wishlist,
});
