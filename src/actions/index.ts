//import {nextId} from './_helper';

export const ADD_HOSPITAL_FAVORITES = 'T2.ADD_HOSPITAL_FAVORITES';
export const REMOVE_HOSPITAL_FAVORITES = 'T2.REMOVE_HOSPITAL_FAVORITES';
export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
export const SORT_HOSPITALS = 'T2.SORT_HOSPITALS';
export const FILTER_HOSPITALS = 'T2.FILTER_HOSPITALS';
export const SET_USER_LOCATION = 'T2.SET_USER_LOCATION';
export const SET_USER_PLATFORM = 'T2.SET_USER_PLATFORM';
export const T2_APP_MESSAGE_START = 'T2.APP_MESSAGE_START';
export const T2_APP_MESSAGE_CLEAR = 'T2.APP_MESSAGE_CLEAR';
export const EULA_ACCEPTED = 'T2.EULA_ACCEPTED';
export const EULA_REJECTED = 'T2.EULA_REJECTED';
export const SET_GEO_SEARCH_RESULTS = 'T2.SET_GEO_SEARCH_RESULTS';
export const DISMISS_911_WARNING = 'T2.DISMISS_911_WARNING';
export const SET_HOSPITAL_GEO_SORT_TEXT = 'T2.SET_HOSPITAL_GEO_SORT_TEXT';
export const UNWATCH_CURRENT_LOCATION = 'T2.UNWATCH_CURRENT_LOCATION';
export const SET_DRAWER_OPEN = 'T2.SET_DRAWER_OPEN';
export const SET_HOSPITALS_PAGE = 'T2.SET_HOSPITALS_PAGE';
export const CLEAR_USER_LOCATION = 'T2.CLEAR_USER_LOCATION';
export const SET_USER_PERMISSION_LOCATION = 'T2.SET_USER_PERMISSION_LOCATION';

import {search_city, search_zipcodes, get_results_array} from '../sqlite';
import {getDrawerOpen,getHospitalPage,getHospitalsPageMax,getPermissions} from '../containers/selectors'

export const setPermissionUserLocation = (permissionGranted: boolean) => {
  return {
    type: SET_USER_PERMISSION_LOCATION,
    granted: permissionGranted
  }
}

export const hospitalNextPage = () => {
  return (dispatch,getState,extraArgs) => {
    const currState = getState();
    const page = getHospitalPage(currState);
    if(page < getHospitalsPageMax(currState)){
      dispatch(setHospitalPage(page + 1));
    }
  }
}

export const hospitalPrevPage = () => {
  return (dispatch,getState,extraArgs) => {
    const currState = getState();
    const page = getHospitalPage(currState);
    if(page > 0){
      dispatch(setHospitalPage(page - 1));
    }
  }
}

export const setHospitalPage = (page: number) => {
  return {
    type: SET_HOSPITALS_PAGE,
    page
  }
}

export const toggleMainDrawer = () => {
  return (dispatch,getState,extraArgs) => {
    dispatch(setDrawerOpen(!getDrawerOpen(getState())));
  }
}

export const setDrawerOpen = (open: boolean) => {
  return {
    type: SET_DRAWER_OPEN,
    open
  }
}


export const eulaAccepted = () => {
  return {
    type: EULA_ACCEPTED
  }
}

export const setHospitalGeoSortText = (text: string) => {
  return {
    type: SET_HOSPITAL_GEO_SORT_TEXT,
    text
  }
}

export const dismiss911Warning = () => {
  return {
    type: DISMISS_911_WARNING
  }
}

export const setGpsSearchResults = (results:{title: string, latitude: number, longitude: number}[]) => {
  console.log(results);
  return {
    type: SET_GEO_SEARCH_RESULTS,
    results
  }
}

let geoWatchID;

export const watchCurrentLocation = () => {
  return (dispatch,getState,extraArgs) => {
    if(geoWatchID){
      window.navigator.geolocation.clearWatch(geoWatchID);
    }
    geoWatchID = window.navigator.geolocation.watchPosition((position) => {
       const locationPermission = getPermissions(getState()).location;
       if(locationPermission){
         dispatch(setUserLocation(position.coords.latitude,position.coords.longitude));
       }
    },(PositionError) => {
        if(PositionError.code === PositionError.PERMISSION_DENIED){
          const locationPermission = getPermissions(getState()).location;
          if(locationPermission){ //user has given permission
            dispatch(openLocationSettings());
          }
        }
        if(PositionError.code === PositionError.POSITION_UNAVAILABLE){
          alert('POSITION_UNAVAILABLE');
        }
        if(PositionError.code === PositionError.TIMEOUT){
          alert('TIMEOUT');
        }
    })
  }
}

export const openLocationSettings = () => {
  return (dispatch,getState,extraArgs) => {
    if (extraArgs.isCordova && extraArgs.nativeSettings) {
          extraArgs.nativeSettings.open("location", function() {
                  console.log('opened settings');
            },
            function () {
                console.log('failed to open settings');
            }
          );
    } else {
        console.log('openNativeSettingsTest is not active!');
    }
  }
}

export const unWatchCurrentLocation = () => {
  if(geoWatchID){
    window.navigator.geolocation.clearWatch(geoWatchID);
  }
  return {
    type: UNWATCH_CURRENT_LOCATION
  }
}

export const getCityGeo = (searchStr: string) => {
  return (dispatch,getState,extraArgs) => {
    if(extraArgs.db){ //TODO more checking
 
      search_city(extraArgs.db,searchStr,15,(err,rs) => {
        //https://www.w3.org/TR/webdatabase/#database-query-results

          if(rs.rows.length){
              const gpsResults = get_results_array(rs.rows,10)
                  .map(city => { //transforming
                    return {
                            id: city.id,
                            title: city.Name, 
                            state_abbrev: city.StateAbbrev,
                            description: city.Name + ", " + city.StateAbbrev,
                            latitude: city.Latitude,
                            longitude: city.Longitude
                          }
                  });
              
              dispatch(setGpsSearchResults(gpsResults));
          } else {
             dispatch(setGpsSearchResults([]));
          }
      });
    }
  }
}

export const getZipGeo = (searchStr: string) => {
  return (dispatch,getState,extraArgs) => {
    if(extraArgs.db){ //TODO more checking
       console.log("getZipGeo");
      search_zipcodes(extraArgs.db,searchStr,15,(err,rs) => {
        //https://www.w3.org/TR/webdatabase/#database-query-results

          if(rs.rows.length){
              const gpsResults = get_results_array(rs.rows,10)
                  .map(zip => { //transforming
                    return {
                            id: zip.id,
                            title: zip.Zipcode, 
                            state_abbrev: '',
                            description: zip.Zipcode,
                            latitude: zip.Latitude,
                            longitude: zip.Longitude
                          }
                  });
                console.log(gpsResults );
              dispatch(setGpsSearchResults(gpsResults));
          } else {
             dispatch(setGpsSearchResults([]));
          }
      });
    }
  }
}

export const eulaRejected = () => {
  const localAction = {
    type: EULA_REJECTED
  }

  return (dispatch,getState,extraArgs) => {
    dispatch(localAction);
    if(extraArgs.platform.toLowerCase() === 'android'){
      (window as any).navigator.app.exitApp();
    }
  }
}

export const sortHospitals = (sortBy: string, sortDir = 'asc') => {
  return {
    type: SORT_HOSPITALS,
    sortBy,
    sortDir
  }
}

export const searchHospitals = (text: string) => {
  return (dispatch,getState,extraArgs) => {
      //search change pagination so must reset page on
      // any action which filters results
      dispatch(setHospitalPage(0)); 
      dispatch(searchHospitalText(text));
  }
}

export const searchHospitalText= (text: string) => {
  return {
    type: FILTER_HOSPITALS,
    text
  }
}

export const setUserLocation = (latitude: number, longitude: number) => {
  return {
    type: SET_USER_LOCATION,
    latitude,
    longitude
  }
}

export const clearUserLocation = () => {
  return {
    type: CLEAR_USER_LOCATION
  }
}

export const setUserPlatform = (platform: string) => {
  return {
    type: SET_USER_PLATFORM,
    platform
  }
}

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const addHospitalToFavorites = (hospitalId:number) => {
  return {
    type: ADD_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const removeHospitalFromFavorites = (hospitalId:number) => {
  return {
    type: REMOVE_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const windowResize = (width:number,height: number) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  }
}

export const messageStart = (message) => {
  return {
    type: T2_APP_MESSAGE_START,
    message
  };
}

export const messageClear = () => {
  return {
    type: T2_APP_MESSAGE_CLEAR
  };
}


var timeOutId = null
export const sendMessage = (message) => {
  
  return (dispatch,getState,extraArgs) => {
    console.log(extraArgs);
    dispatch(messageStart(message));

    if(timeOutId){
        clearTimeout(timeOutId)
    }
    
    timeOutId = setTimeout(
                    () => {dispatch(messageClear())}
                    ,3000
                )
  }
};

