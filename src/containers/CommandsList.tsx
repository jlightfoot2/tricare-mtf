import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {CommandInterface} from '../res/data/commands';
import {withRouter} from 'react-router-dom';
import {getHospitalsAdvanced, getHospitalSearchText} from './selectors';
import {dismiss911Warning} from '../actions';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: getHospitalsAdvanced(state,ownProps),
    searchText: getHospitalSearchText(state,ownProps),
    show911Warning: state.user.show911Warning
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (hospital: CommandInterface) => {
       ownProps.history.push('/commands/' + hospital.id);
    },
    dismiss911: () => {
      dispatch(dismiss911Warning());
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));