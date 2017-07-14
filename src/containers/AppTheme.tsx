import {connect} from 'react-redux';
import AppThemeComponent from '../components/AppTheme';
import {withRouter} from 'react-router-dom';
import {setPageTitle,toggleMainDrawer} from '../actions';

const stateToProps = (state,ownProps) => {
  return {

  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    setPageTitle: (title:string) => {
      dispatch(setPageTitle(title));
    },
    toggleDrawer: () => {
      dispatch(toggleMainDrawer());
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(AppThemeComponent));