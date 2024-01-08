import { CarType } from '../hooks/useData';

export interface CartState {
  cart: CarType[];
}

const initialState: CartState = { cart: [] };

export type CartAction = { type: 'ADD_CART'; payload: CarType };
export type DeleteCartAction = { type: 'DELETE_CART'; payload: string };
export const cartReducer = (
  state: CartState = initialState,
  action: CartAction | DeleteCartAction
) => {
  switch (action.type) {
    case 'ADD_CART': {
      const existingItem = state.cart.find(
        (vehicle) => vehicle.vehicle === action.payload.vehicle
      );

      if (!existingItem) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        window.alert(`This Vehicle is already booked by you.`);
        return state;
      }
    }

    case 'DELETE_CART': {
      const updatedCart = state.cart.filter(
        (vehicle) => vehicle.vehicle !== action.payload
      );
      return { ...state, cart: updatedCart };
    }
    default: {
      return state;
    }
  }
};
