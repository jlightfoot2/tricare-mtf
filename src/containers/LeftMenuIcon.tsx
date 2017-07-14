import {connect} from 'react-redux';
import LeftMenuIconComponent from '../components/LeftMenuIcon';

import {withRouter} from 'react-router-dom';
import {getDrawerOpen} from './selectors'
import {toggleMainDrawer,setDrawerOpen} from '../actions';
const stateToProps = (state,ownProps) => {
  return {
    open: getDrawerOpen(state)
  }
}

const dispatchToProps = (dispatch,ownProps) => {

  return {
    setDrawerOpen: (open: boolean) =>{
      dispatch(setDrawerOpen(open));
    },
    toggleDrawer: () =>{
      dispatch(toggleMainDrawer());
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(LeftMenuIconComponent));