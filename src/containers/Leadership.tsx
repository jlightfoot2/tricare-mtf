import {connect} from 'react-redux';
import {LeadersInterface} from '../res/data/leadership';
import FavoritesListComponent from '../components/Leadership';

import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    leaders: state.leaderIds.map(lid => state.leaders[lid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    itemClick: (leader: LeadersInterface) =>{
      ownProps.history.push('/leaders/' + leader.id);
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(FavoritesListComponent));