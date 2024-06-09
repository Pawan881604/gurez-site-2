import {
  CREATE_SEO_FAIL,
  CREATE_SEO_REQUEST,
  CREATE_SEO_RESET,
  CREATE_SEO_SUCCESS,
  SEO_CLEAR_SEO,
  SEO_FAIL,
  SEO_REQUEST,
  SEO_SUCCESS,
  UPDATE_SEO_FAIL,
  UPDATE_SEO_REQUEST,
  UPDATE_SEO_RESET,
  UPDATE_SEO_SUCCESS,
} from "../constants/SeoConstants";

export const seoReducer = (state = { seoData: [] }, action) => {
  switch (action.type) {
    case SEO_REQUEST:
    case CREATE_SEO_REQUEST:
    case UPDATE_SEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEO_SUCCESS:
      return {
        ...state,
        loading: false,
        seoData: action.payload,
      };
    case CREATE_SEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UPDATE_SEO_SUCCESS:
      return {
        ...state,
        loading: false,
        update: true,
      };
    case SEO_FAIL:
    case CREATE_SEO_FAIL:
    case UPDATE_SEO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_SEO_RESET:
      return {
        ...state,
        loading: false,
        success: null,
      };
    case UPDATE_SEO_RESET:
      return {
        ...state,
        loading: false,
        update: null,
      };
    case SEO_CLEAR_SEO:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
