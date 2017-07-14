import {connect} from 'react-redux';
import SnackBarComponent from '../components/SnackbarGlobal';
import {messageClear} from '../actions';


const stateToProps = (state,ownProps) => {
  return {
    message: state.view.flash.message,
    open: state.view.flash.open
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    clearMessage: (title:string) => {
      dispatch(messageClear());
    }
  }
}

export default connect(stateToProps,dispatchToProps)(SnackBarComponent);