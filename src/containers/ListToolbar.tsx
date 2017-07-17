import ListToolbar from '../components/ListToolbar';
import {connect} from 'react-redux';
import {searchHospitals,sortHospitals} from '../actions';
import {getHospitalSearchText, getPermissions} from './selectors'
//TODO do i need this

const stateToProps = (state, ownProps) => {
  return {
    searchText: getHospitalSearchText(state),
    sortConfig: state.filters.hospitals,
    locationPermission: getPermissions(state).location,
    screen: ownProps.screen
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
     searchHospitals: (text: string) => {
       dispatch(searchHospitals(text));
     },
     sortHospitals: (sort: string,direction: string) => {
       dispatch(sortHospitals(sort,direction));
     }
  }
}


export default connect(stateToProps, dispatchToProps)(ListToolbar);