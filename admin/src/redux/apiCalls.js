import { deleteUsersFailure, deleteUsersStart, deleteUsersSuccess, getUsersFailure, getUsersStart, getUsersSuccess, loginFailure, loginStart, loginSuccess, updateUsersFailure, updateUsersStart, updateUsersSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMethods'
import { createProductFailure, createProductStart, createProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";



// LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  }; 

  // GET ALL PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  }; 

  // delete PRODUCT
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(res.data));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

  // UPDATE PRODUCT
  export const updateProduct = async (id,  dispatch, product) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`, product);
      dispatch(updateProductSuccess(id, product));
      window.location.replace("/products")
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
  
  // CREATE PRODUCT
  export const createProduct = async (product,dispatch) => {
    dispatch(createProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(createProductSuccess(res.data));
    } catch (err) {
      dispatch(createProductFailure());
    }
  };


  //GET USERS
  export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await userRequest.get("/users");
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailure());
    }
  };
// DELETE USER
  export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUsersStart());
    try {
      const res = await userRequest.delete(`/users/${id}`);
      dispatch(deleteUsersSuccess(res.data));
    } catch (err) {
      dispatch(deleteUsersFailure());
    }
  };
  // UPDATE USER
  export const updateUser = async (id,  dispatch, product) => {
    dispatch(updateUsersStart());
    try {
      const res = await userRequest.put(`/users/${id}`, product);
      dispatch(updateUsersSuccess(id, product));
      window.location.replace("/users");
    } catch (err) {
      dispatch(updateUsersFailure());
    }
  };