import {connect} from 'react-redux';
import GeoSearchFieldComponent from '../components/GeoSearchField';
import {setUserLocation,getCityGeo,setHospitalGeoSortText,getZipGeo} from '../actions';
import {isNumeric} from './_helper'

const stateToProps = (state,ownProps) => {
  console.log(state.filters.hospitals);
  return {
    searchData: state.searches.geo,
    sortText: state.filters.hospitals.sortText
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    setUserLocation: (latitude: number, longitude: number) => {
      dispatch(setUserLocation(latitude,longitude));
    },
    searchGeo: (searchStr: string) => {
      dispatch(setHospitalGeoSortText(searchStr));
      if(searchStr.length > 2){
        if(isNumeric(searchStr)){
          dispatch(getZipGeo(searchStr));
        }else{
          dispatch(getCityGeo(searchStr));
        }
      }
    }
  }
}


export default connect(stateToProps,dispatchToProps)(GeoSearchFieldComponent);