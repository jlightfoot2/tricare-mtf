import {connect} from 'react-redux';
import CommandDetailsComponent from '../components/CommandDetailsPage';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    hospital: state.hospitals[ownProps.match.params.id]
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandDetailsComponent));