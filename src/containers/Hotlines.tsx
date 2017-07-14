import {connect} from 'react-redux';
import HotlinesComponent from '../components/Hotlines';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    hotlines: state.hotlineIds.map(hid => state.hotlines[hid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {

  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(HotlinesComponent));