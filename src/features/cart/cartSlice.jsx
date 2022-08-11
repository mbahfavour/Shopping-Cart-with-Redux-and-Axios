import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = "https://course-api.com/react-useReducer-cart-project";


const initialState = {
  cartItems: [],
  amount: 0,
  totalCost: 0,
  isLoading: true,
};


export const getCartItems = createAsyncThunk('cart/getCartItems',
async (name, thunkAPI)=> {
  try {
    const resp = await axios(url)
    return resp.data
  } catch(error) {
    return thunkAPI.rejectWithValue('Something went wrong')
  }
 
})



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseQty: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
      cartItem.price = parseInt(cartItem.price) + parseInt(cartItem.price);
    },
    decreaseQty: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      const originalPrice = cartItem.price;
      // cartItem.price = cartItem.price - originalPrice
    },
    calculateTotals: (state) => {
      let itemAmount = 0;
      let totalCost = 0;

      state.cartItems.forEach((item) => {
        itemAmount += item.amount;
        totalCost += item.amount * item.price;
      });

      state.amount = itemAmount;
      state.totalCost = totalCost;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { clearCart, removeItem, increaseQty, decreaseQty, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;