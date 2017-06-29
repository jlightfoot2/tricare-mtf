import {connect} from 'react-redux';
import LeadershipDetailsPage from '../components/LeadershipDetailsPage';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    leader: state.leaders[ownProps.match.params.id]
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(LeadershipDetailsPage));