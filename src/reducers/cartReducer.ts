import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  vehicle: string;
  imageURL: string;
  price: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const carSliceCart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCarCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCarCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.vehicle !== action.payload.vehicle
      );
    },
  },
});

export const { addCarCart, removeCarCart } = carSliceCart.actions;

export const displayWishlist = (state: CartItem) => state.vehicle;

export default carSliceCart.reducer;
