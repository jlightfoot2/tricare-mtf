import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
import {withRouter} from 'react-router-dom';
import {getHospitalsAdvanced, getHospitalSearchText,getHospitalPage,getHospitalsPageMax} from './selectors';
import {dismiss911Warning,setHospitalPage} from '../actions';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: getHospitalsAdvanced(state,ownProps),
    searchText: getHospitalSearchText(state,ownProps),
    show911Warning: state.user.show911Warning,
    page: getHospitalPage(state),
    lastPage: getHospitalsPageMax(state)
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (hospital: CommandInterface) => {
       ownProps.history.push('/hospitals/' + hospital.id);
    },
    dismiss911: () => {
      dispatch(dismiss911Warning());
    },
    setPage: (pageIdx: 0) => {
      dispatch(setHospitalPage(pageIdx));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));