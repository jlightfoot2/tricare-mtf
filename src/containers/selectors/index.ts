import {createSelector} from 'reselect'
import {calcDistance,alphaSort} from '../_helper';


//export const getHospitalSearchText = (state,props) => props.searchText;
export const getHospitalSearchText = (state) => state.filters.hospitals.filterText;

export const getHospitals = (state) => state.hospitalIds.map(hid => state.hospitals[hid]);

export const getUser = (state) => state.user;
export const userHasLatLon = (state) => {
    const {latitude,longitude} = getUser(state);
    return latitude !== null && longitude !== null;
}
export const getGeoSearchData = (state) => state.searches.geo;

export const getDrawerOpen = (state) => state.view.drawer.open;

export const getHospitalSortFilter = (state) => state.filters.hospitals;

export const getHospitalPage = (state) => getHospitalSortFilter(state).currentPage;
export const getHospitalsResultMax = (state) => getHospitalSortFilter(state).resultsMax;

export const getPermissions = (state) => state.settings.permissions;

export const searchHospitals = createSelector( //just searching titles for now
  [getHospitals,getHospitalSearchText],
  (hospitals,searchText) => {
    return hospitals.filter((hospital) => {
        return hospital.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }
);

export const getHospitalsAdvanced = createSelector( //just searching titles for now
  [searchHospitals,getUser,getHospitalSortFilter,userHasLatLon],
  (hospitals,user,sortFilter,hasLatLon) => {
    const {latitude,longitude} = user;
    let sortCb = alphaSort('title',sortFilter.sortDir);
    if(userHasLatLon && sortFilter.sortBy === 'current_location' || sortFilter.sortBy === 'zip_city_location'){
      sortCb = alphaSort('distance',sortFilter.sortDir);
    }

    if(hasLatLon){
      return hospitals.map(hospital => calcDistance(hospital,latitude,longitude))
                        .sort(sortCb);
    }

    return hospitals.map(hospital => {
        hospital.distance = -1;
        return hospital;
    }).sort(sortCb);
  }
);

export const getHospitalsAdvancedPaged = createSelector( //just searching titles for now
  [getHospitalsAdvanced,getHospitalSortFilter],
  (hospitals,sortFilter) => {
    const startIndx = sortFilter.currentPage * sortFilter.resultsMax;
    const resultsLength = startIndx + sortFilter.resultsMax;
    return hospitals.slice(startIndx,resultsLength)
  }
);
export const getHospitalsLength = createSelector(
    [getHospitalsAdvanced],
    (hospitals) => {
      return hospitals.length;
    }
  );
export const getHospitalsPageMax = createSelector(
    [getHospitalsLength,getHospitalsResultMax],
    (hospitalsLength,max_results) => {
      const safe_max_results = max_results == 0 ? 1 : max_results;
      return Math.ceil(hospitalsLength/safe_max_results);
    }
  );
