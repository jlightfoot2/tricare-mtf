import {connect} from 'react-redux';
import CommandTwitterPageComponent from '../components/CommandTwitterPage';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    command: state.hospitals[ownProps.match.params.id]
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {

  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandTwitterPageComponent));