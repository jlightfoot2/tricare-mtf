import {connect} from 'react-redux';
import ServiceHomePage from '../components/ServiceHomePage';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(ServiceHomePage));