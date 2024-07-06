import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CouponState {
  couponId: string;
  isOpenCreateCoupon: boolean;
  // formData: ICoupon; // Define ICoupon interface as needed
}

const initialState: CouponState = {
  couponId: '',
  isOpenCreateCoupon: false,
  // formData: {
  //   // Define initial properties of the coupon form data
  // }
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    openCreateCoupon: (state, action: PayloadAction<boolean>) => {
      state.isOpenCreateCoupon = action.payload;
    },
    startEditCoupon: (state, action: PayloadAction<string>) => {
      state.couponId = action.payload;
    },
    cancelEditCoupon: (state) => {
      state.couponId = '';
    }
    // handleCouponFormData: (state, action: PayloadAction<ICoupon>) => {
    //   state.formData = action.payload;
    // }
  }
});

const couponReducer = couponSlice.reducer;
export const { cancelEditCoupon, startEditCoupon, openCreateCoupon } = couponSlice.actions;
export default couponReducer;
