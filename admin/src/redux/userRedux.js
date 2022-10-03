import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    allUsers: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },

    // GET USERS
    getUsersStart: (state) => {
      state.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE USERS
    deleteUsersStart: (state) => {
      state.isFetching = true;
    },
    deleteUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(   // find user and delete
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE USERS
    updateUsersStart: (state) => {
      state.isFetching = true;
    },
    updateUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.products[ // find user and update
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, getUsersStart,getUsersSuccess, getUsersFailure,deleteUsersStart,deleteUsersSuccess,deleteUsersFailure,updateUsersStart,updateUsersSuccess,updateUsersFailure} = userSlice.actions;
export default userSlice.reducer;