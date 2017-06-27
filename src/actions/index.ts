import {ProductInterface} from '../res/data/products';
import {nextId} from './_helper';
export const UPDATE_PRODUCT = 'T2.UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'T2.DELETE_PRODUCT';
export const ADD_PRODUCT_FAVORITES = 'T2.ADD_PRODUCT_FAVORITES';
export const REMOVE_PRODUCT_FAVORITES = 'T2.REMOVE_PRODUCT_FAVORITES';
export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';

export const updateProduct = (product:ProductInterface) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const saveProduct = (product:ProductInterface) => {
  return (dispatch,getState) => {
    if(product.id === 0){
      product.id = nextId(getState().productIds);
    }
    dispatch(updateProduct(product));
  }
}

export const deleteProduct = (id:number) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

export const addProductFavorites = (id:number) => {
  return {
    type: ADD_PRODUCT_FAVORITES,
    id
  }
}

export const removeProductFavorites = (id:number) => {
  return {
    type: REMOVE_PRODUCT_FAVORITES,
    id
  }
}

export const windowResize = (width:number,height: number) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  }
}

