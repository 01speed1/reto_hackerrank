import { userConstants } from "../constants";

const initialState = {
  user: null,
  error: null,
  loading: false
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
