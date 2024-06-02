import {
  BLOG_CATEGORY_REQUEST,
  BLOG_CATEGORY_SUCCESS,
  BLOG_CATEGORY_FAILED,
  CATEGORY_CLEAR_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILED,
  NEW_SUB_POST_CATEGORIE_REQUEST,
  NEW_SUB_POST_CATEGORIE_SUCCESS,
  NEW_SUB_POST_CATEGORIE_FAILED,
  BLOG_SUB_CATEGORY_REQUEST,
  BLOG_SUB_CATEGORY_SUCCESS,
  BLOG_SUB_CATEGORY_FAILED,
} from "../constants/BlogCategoryConstant";
import {
  UPDATE_BLOG_POST_FAILED,
  UPDATE_BLOG_POST_SUCCESS,
} from "../constants/BlogPostConstants";
import { server_url } from "../utils/Url";
import {
  get_method,
  others_method,
  others_multiform_method,
} from "../utils/Headers";
import axiosInstance from "../utils/AxiosInstance";

export const GetBlogCategory = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_CATEGORY_REQUEST });
    const { data } = await axiosInstance.get(
      `${server_url()}/api/v1/blog/all-categore`,
      get_method()
    );
    dispatch({
      type: BLOG_CATEGORY_SUCCESS,
      payload: data.allCategores,
    });
  } catch (error) {
    dispatch({
      type: BLOG_CATEGORY_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const get_blog_sub_category = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_SUB_CATEGORY_REQUEST });
    const { data } = await axiosInstance.get(
      `${server_url()}/api/v1/blog/all-sub-categore`,
      get_method()
    );
    console.log(data);
    dispatch({
      type: BLOG_SUB_CATEGORY_SUCCESS,
      payload: data.blog_sub_categores,
    });
  } catch (error) {
    dispatch({
      type: BLOG_SUB_CATEGORY_FAILED,
      payload: error.response.data.message,
    });
  }
};

// create category
export const CreatePostCategory =
  (input_value, uuid, img_id) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CATEGORY_REQUEST });
      const formData = new FormData();
      for (let key in input_value) {
        formData.append(key, input_value[key]);
      }
      formData.append("uuid", uuid);
      formData.append("img_id", img_id);

      const { data } = await axiosInstance.post(
        `${server_url()}/api/v1/blog/create/categore`,
        formData,
        others_method()
      );
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAILED,
        payload: error.response.data.message,
      });
    }
  };

export const create_new_post_sub_categore =
  (input_value, uuid, img_id) => async (dispatch) => {
    try {
      dispatch({ type: NEW_SUB_POST_CATEGORIE_REQUEST });
      const formData = new FormData();
      for (let key in input_value) {
        formData.append(key, input_value[key]);
      }
      formData.append("uuid", uuid);
      formData.append("img_id", img_id);

      const { data } = await axiosInstance.post(
        `${server_url()}/api/v1/blog/create/sub-categore`,
        formData,
        others_method()
      );

      dispatch({ type: NEW_SUB_POST_CATEGORIE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEW_SUB_POST_CATEGORIE_FAILED,
        payload: error.response.data.message || "Some error occurred",
      });
    }
  };

// DELETE CATEGORY
export const DeletePostCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    const { data } = await axiosInstance.delete(
      `${server_url()}/api/v1/blog/update/categore/${id}`,
      get_method()
    );
    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAILED,
      payload: error.response.data.message,
    });
  }
};

//UPDATE BLOG CATEGORY
export const UpdateBlogCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });
    const { data } = await axiosInstance.put(``);
    dispatch({ type: UPDATE_BLOG_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_POST_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const ClearError = () => async (dispatch) => {
  dispatch({ type: CATEGORY_CLEAR_ERROR });
};
