import {createSelector} from 'reselect'
import {calcDistance,alphaSort} from '../_helper';


//export const getHospitalSearchText = (state,props) => props.searchText;
export const getHospitalSearchText = (state,props) => state.filters.hospitals.filterText;

export const getHospitals = (state) => state.hospitalIds.map(hid => state.hospitals[hid]);

export const getUser = (state) => state.user;

export const getGeoSearchData = (state) => state.searches.geo;

export const getHospitalSortFilter = (state) => state.filters.hospitals;

export const searchHospitals = createSelector( //just searching titles for now
  [getHospitals,getHospitalSearchText],
  (hospitals,searchText) => {
    return hospitals.filter((hospital) => {
        return hospital.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    });
  }
);

export const getHospitalsAdvanced = createSelector( //just searching titles for now
  [searchHospitals,getUser,getHospitalSortFilter],
  (hospitals,user,sortFilter) => {
    const {latitude,longitude} = user;
    let sortCb = alphaSort('title',sortFilter.sortDir);
    if(sortFilter.sortBy === 'current_location' || sortFilter.sortBy === 'zip_city_location'){
      sortCb = alphaSort('distance',sortFilter.sortDir);
    }
    return hospitals.map(hospital => calcDistance(hospital,latitude,longitude)).sort(sortCb)
  }
);
