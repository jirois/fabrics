import {
  PRODUCT_LIST_DETAIL_FAIL,
  PRODUCT_LIST_DETAIL_REQUEST,
  PRODUCT_LIST_DETAIL_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { loading: true, products: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_DETAIL_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};