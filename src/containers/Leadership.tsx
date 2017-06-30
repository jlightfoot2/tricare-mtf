import {connect} from 'react-redux';
import {LeadersInterface} from '../res/data/leadership';
import FavoritesListComponent from '../components/Leadership';

import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    leaders: state.leaderIds.map(lid => state.leaders[lid]).filter((leader) => {
        return leader.service_id === ownProps.service.id; 
    })
  }
}

const dispatchToProps = (dispatch,ownProps) => {

  return {
    itemClick: (leader: LeadersInterface) =>{
      ownProps.history.push(ownProps.match.url + "/" + leader.id);
    }
  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(FavoritesListComponent));