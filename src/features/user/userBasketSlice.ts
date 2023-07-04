import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Property } from '../../components/pages/List';

interface BasketState {
  items: Property[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Property>) {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = basketSlice.actions;

export default basketSlice.reducer;
