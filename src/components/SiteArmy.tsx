import * as React from 'react';
import {AppPageInterface} from './AppTheme'
import LeadershipPage from './ServiceLeadersPage';
import { Route } from 'react-router-dom';
import {ArmyInfo} from '../res/data/services';
import HomePage from '../containers/ServiceHomePage';
import {AssetsInterface} from './ServiceHomePage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import Page from './Page';
import BackButton from './BackButton';
import LeftMenuIcon from './LeftMenuIcon';
const ArmyLeadershipButton = require('../res/images/ui/tricare-army-leadership.png');
const ArmyResourcesButton = require('../res/images/ui/tricare-army-resources.png');
const ArmyHeader = require('../res/images/ui/tricare-army-home-header.png');

const assets:AssetsInterface = {
  header:  ArmyHeader,
  leadershipImage: ArmyLeadershipButton,
  resourcesImage: ArmyResourcesButton
}

export interface Props {
  appPage: AppPageInterface;
  match: {url: string};
}

export interface State {
  
}

export default class SiteArmy extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle(ArmyInfo.title);
  }
  
  renderRouteComponent = (Component,extraProps = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page appPage={this.props.appPage}><Component assets={assets} service={ArmyInfo} {...routeProps} {...this.props} {...extraProps} /></Page>;
    };
  }
  render(){

    const {match} = this.props;
    return <div>
              <Route exact path={match.url} render={this.renderRouteComponent(HomePage)} />
              <Route exact path={match.url + "/leaders"} render={this.renderRouteComponent(LeadershipPage)} />
              <Route exact path={match.url + "/leaders/:id"} render={this.renderRouteComponent(LeadershipDetailsPage,{leftIcon: <BackButton path={match.url + "/leaders"} />})} />
    </div>;
  }
}