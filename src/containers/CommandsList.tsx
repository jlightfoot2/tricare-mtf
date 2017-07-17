import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
import {withRouter} from 'react-router-dom';
import {getHospitalsAdvancedPaged, getHospitalSearchText,getHospitalPage,getHospitalsPageMax} from './selectors';
import {dismiss911Warning,setHospitalPage} from '../actions';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: getHospitalsAdvancedPaged(state),
    searchText: getHospitalSearchText(state),
    show911Warning: state.user.show911Warning,
    page: getHospitalPage(state),
    lastPage: getHospitalsPageMax(state)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (hospital: CommandInterface) => {
       ownProps.history.push('/commands/' + hospital.id);
    },
    dismiss911: () => {
      dispatch(dismiss911Warning());
    },
    setPage: (pageIdx: number) => {
      dispatch(setHospitalPage(pageIdx));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));