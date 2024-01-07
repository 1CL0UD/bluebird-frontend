import { CarType } from '../hooks/useData';

export interface WishlistState {
  wishlist: CarType[];
}

const initialState = { wishlist: [] };

export type Action = { type: 'ADD_WISHLIST'; payload: CarType };

export const wishlistReducer = (
  state: WishlistState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_WISHLIST': {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
    default: {
      return state;
    }
  }
};
