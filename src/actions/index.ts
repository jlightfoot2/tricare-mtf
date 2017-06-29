export const ADD_HOSPITAL_FAVORITES = 'T2.ADD_HOSPITAL_FAVORITES';
export const REMOVE_HOSPITAL_FAVORITES = 'T2.REMOVE_HOSPITAL_FAVORITES';
export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const addHospitalFavorites = (id:number) => {
  return {
    type: ADD_HOSPITAL_FAVORITES,
    id
  }
}

export const removeHospitalFavorites = (id:number) => {
  return {
    type: REMOVE_HOSPITAL_FAVORITES,
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

