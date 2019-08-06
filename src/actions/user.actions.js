import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const login = (username, password) => {
  // return the promise using fetch which adds to localstorage on resolve

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

export const logout = () => {
  // complete this function
};

export const register = user => dispatch => {
  // return the promise using fetch which dispatches appropriately
  dispatch(setLoading());

  userService
    .register(user)
    .then(data =>
      dispatch({
        type: userConstants.REGISTER_SUCCESS,
        data: data
      })
    )
    .catch(err =>
      dispatch({
        type: userConstants.REGISTER_FAILURE,
        data: err
      })
    );
};

export const setLoading = () => {
  return {
    type: userConstants.REGISTER_REQUEST
  };
};
