import { createSlice } from "@reduxjs/toolkit";

// get from localStorage
export const loadCart = () => (dispatch) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("cart");
    if (data) {
      dispatch(setCartItems(JSON.parse(data)));
    }
  }
};

// helper to update counters
// const updateCartSummary = (state) => {
//   state.itemCounter = state.items.reduce((sum, item) => sum + item.quantity, 0);
//   state.totalPrice = state.items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   localStorage.setItem("cart", JSON.stringify(state.items));
// };

const updateCartSummary = (state) => {
  state.itemCounter = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = state.items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state.items));
};

const initialState = {
  items: [],
  itemCounter: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
      updateCartSummary(state);
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      updateCartSummary(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      updateCartSummary(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.itemCounter = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      updateCartSummary(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      updateCartSummary(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setCartItems,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
