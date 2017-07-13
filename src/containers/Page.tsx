import {connect} from 'react-redux';
import BasicPageComponent from '../components/Page';
import {setPageTitle} from '../actions';

const stateToProps = (state,ownProps) => {
  return {

  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    setPageTitle: (title:string) => {
      dispatch(setPageTitle(title));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(BasicPageComponent);