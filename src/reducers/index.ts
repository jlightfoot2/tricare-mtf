import {defaultCommands, defaultCommandIds} from '../res/data/commands';
import {defaultLeaders, defaultLeaderIds} from '../res/data/leadership';
import {defaultServices, defaultServiceIds} from '../res/data/services';
import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE
} from '../actions';
import {combineReducers} from 'redux';
//import {arrayPushUnique,arrayRemove} from './_helper';


const services = (state = defaultServices, action) => {
  return state;
}

const serviceIds = (state = defaultServiceIds, action) => {
  return state;
}

const hospitals = (state = defaultCommands, action) => {
  return state;
}

const hospitalIds = (state = defaultCommandIds, action) => {
  return state;
}

const leaders = (state = defaultLeaders, action) => {
  return state;
}

const leaderIds = (state = defaultLeaderIds, action) => {
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
  leaders,
  leaderIds,
  view,
  services,
  serviceIds
});

export default reducer;

