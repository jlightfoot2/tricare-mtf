import {connect} from 'react-redux';
import EulaComponent from '../components/Eula';
import {eulaAccepted,eulaRejected} from '../actions';

const getPlatform = () =>{
  let platform = 'browser';
  if(typeof (window as any).device !== 'undefined'){ //should be set in the case of cordova
    platform = (window as any).device.platform;
  }
  return platform.toLowerCase();
}

const shouldHideRejectButton = () => {
  return getPlatform() !== 'android';
}

const stateToProps = (state) => {
  return {
    eulaAccepted: state.settings.eulaAccepted,
    hideRejectButton: shouldHideRejectButton()
  }
}
const dispatchToProps = (dispatch) => {
  return {
    accept: () => dispatch(eulaAccepted()),
    reject: () => dispatch(eulaRejected())
  }
  
}
export default connect(
  stateToProps,
  dispatchToProps)
(EulaComponent);