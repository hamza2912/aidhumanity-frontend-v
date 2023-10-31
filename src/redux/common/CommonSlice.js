import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bodyOverflowHidden: false,
  projectSidebar: false,
  summarySidebar: false,
  checkoutSidebar: false,
  regularSidebar: false,
  subscriptionSidebar: false,
  showLogin: false,
  showForgetEmail: false,
  showForgetPassword: false,
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setBodyOverflowHidden: (state, action) => {
      state.bodyOverflowHidden = action.payload;
    },
    setProjectSidebar: (state, action) => {
      state.projectSidebar = action.payload;
    },
    setSummarySidebar: (state, action) => {
      state.summarySidebar = action.payload;
    },
    setCheckoutSidebar: (state, action) => {
      state.checkoutSidebar = action.payload;
    },
    setRegularSidebar: (state, action) => {
      state.regularSidebar = action.payload;
    },
    setSubscriptionSidebar: (state, action) => {
      state.subscriptionSidebar = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setShowForgetEmail: (state, action) => {
      state.showForgetEmail = action.payload;
    },
    setShowForgetPassword: (state, action) => {
      state.showForgetPassword = action.payload;
    },
  },
});

export const {
  setBodyOverflowHidden,
  setProjectSidebar,
  setSummarySidebar,
  setCheckoutSidebar,
  setRegularSidebar,
  setSubscriptionSidebar,
  setShowLogin,
  setShowForgetEmail,
  setShowForgetPassword,
} = commonSlice.actions;

export default commonSlice.reducer;
