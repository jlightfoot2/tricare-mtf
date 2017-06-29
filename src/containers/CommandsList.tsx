import {connect} from 'react-redux';
import {CommandInterface} from '../res/data/commands';
import CommandHospitalsComponent from '../components/CommandsList';

import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: state.hospitalIds.map(hid => state.hospitals[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (product: CommandInterface) =>{
      ownProps.history.push('/commands/' + product.id);
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));