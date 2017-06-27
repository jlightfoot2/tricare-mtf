import {defaultCommands, defaultCommandIds} from '../res/data/commands';
import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE
} from '../actions';
import {combineReducers} from 'redux';
//import {arrayPushUnique,arrayRemove} from './_helper';


const hospitals = (state = defaultCommands, action) => {
  return state;
}

const hospitalIds = (state = defaultCommandIds, action) => {
  return state;
}

const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'Navy Medicine'
  }
}
const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
  }
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds,
  view
});

export default reducer;

