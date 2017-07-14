import {defaultCommands, defaultCommandIds} from '../res/data/commands';
import {defaultLeaders, defaultLeaderIds} from '../res/data/leadership';
import {defaultHotlines, defaultHotlineIds} from '../res/data/hotlines';

import {
  WINDOW_RESIZE,
  SET_PAGE_TITLE,
  SORT_HOSPITALS,
  FILTER_HOSPITALS,
  SET_USER_LOCATION,
  SET_USER_PLATFORM,
  ADD_HOSPITAL_FAVORITES,
  REMOVE_HOSPITAL_FAVORITES,
  T2_APP_MESSAGE_CLEAR,
  T2_APP_MESSAGE_START,
  EULA_ACCEPTED,
  EULA_REJECTED,
  SET_GEO_SEARCH_RESULTS,
  DISMISS_911_WARNING,
  SET_HOSPITAL_GEO_SORT_TEXT
} from '../actions';
import {combineReducers} from 'redux';
import {arrayPushUnique,arrayRemove,copyArray} from './_helper';

const defaultFilters = {
  hospitals: {
    sortBy: "default",
    sortDir: "asc",
    filterText: "",
    sortText: ""
  }
}

const defaultUser = {
  latitude: 0,
  longitude: 0,
  show911Warning: true,
  platform: 'unknown'
}

const defaultSettings = {
  eulaAccepted: false
}

const defaultView = {
  screen: {
    width: 500,
    height: 500
  },
  page: {
    title: 'Navy Medicine'
  },
  flash: {
    message: '',
    open: false
  }
}

const defaultSearches = {
  geo: []
};

const filters = (state = defaultFilters, action) => {
  let newHospitals = null;
  switch (action.type) {
    case SORT_HOSPITALS:
      newHospitals = {...state.hospitals,sortBy: action.sortBy,sortDir: action.sortDir};
      state = {...state,hospitals: newHospitals};
      break;
    case FILTER_HOSPITALS:
      newHospitals = {...state.hospitals,filterText: action.text};
      state = {...state,hospitals: newHospitals};
      break;
    case SET_HOSPITAL_GEO_SORT_TEXT:
      newHospitals = {...state.hospitals,sortText: action.text};
      state = {...state,hospitals: newHospitals};
      break;
  }
  return state;
}

const searches = (state = defaultSearches, action) => {
  switch (action.type) {
    case SET_GEO_SEARCH_RESULTS:

      state = {...state,geo: copyArray(action.results)}
      break;
  }
  return state;
}

//Do no save
const user = (state = defaultUser, action) => {
  switch(action.type){
    case SET_USER_LOCATION:
      state = {...state,latitude: action.latitude, longitude: action.longitude}
      break;
    case DISMISS_911_WARNING:
      state = {...state,show911Warning: false}
      break;
    case SET_USER_PLATFORM:
      state = {...state,platform: action.platform}
      break;
  }
  return state;
}

//for this specific app well will save setting in this reducer
//Do not store PII  here
const settings = (state = defaultSettings,action) => {
  switch(action.type){
    case EULA_ACCEPTED:
      state = {...state, eulaAccepted: true};
      break;
    case EULA_REJECTED:
      state = {...state, eulaAccepted: false};
      break;
  }
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

const hotlines = (state = defaultHotlines, action) => {
  return state;
}

const hotlineIds = (state = defaultHotlineIds, action) => {
  return state;
}


const view = (state = defaultView, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      state = {...state,screen: {...state.screen, width: action.width, height: action.height}};
      break;
    case SET_PAGE_TITLE:
      state = {...state,page: {...state.page, title: action.title}};
      break;
    case T2_APP_MESSAGE_START:
      state = {...state,flash: {message: action.message, open: true}};
      break;
    case T2_APP_MESSAGE_CLEAR:
      state = {...state,flash: {message: '', open: false}};
      break;
  }
  return state;
}

const favoriteHospitalIds = (state = [], action) => {
  switch (action.type) {
    case ADD_HOSPITAL_FAVORITES:
      state = arrayPushUnique(action.id,state);
      break;
    case REMOVE_HOSPITAL_FAVORITES:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}

const reducer = combineReducers({
  hospitals,
  hospitalIds,
  leaders,
  leaderIds,
  hotlines,
  hotlineIds,
  filters,
  favoriteHospitalIds,
  user,
  view,
  settings,
  searches
});

export default reducer;

