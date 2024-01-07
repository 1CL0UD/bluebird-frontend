import { CarType } from '../hooks/useData';

export interface WishlistState {
  wishlist: CarType[];
}

const initialState: WishlistState = { wishlist: [] };

export type WishlistAction = { type: 'ADD_WISHLIST'; payload: CarType };
export type DeleteWishlistAction = { type: 'DELETE_WISHLIST'; payload: string };

export const wishlistReducer = (
  state: WishlistState = initialState,
  action: WishlistAction | DeleteWishlistAction
) => {
  switch (action.type) {
    case 'ADD_WISHLIST': {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
    case 'DELETE_WISHLIST': {
      const updatedWishlist = state.wishlist.filter(
        (vehicle) => vehicle.vehicle !== action.payload
      );
      return { ...state, wishlist: updatedWishlist };
    }
    default: {
      return state;
    }
  }
};
