import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeadershipPage from './ServiceLeadersPage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import HomePage from '../containers/ServiceHomePage';
import { Route } from 'react-router-dom';
import {AirForceInfo} from '../res/data/services';
import {AssetsInterface} from './ServiceHomePage';
import BackButton from './BackButton';
import LeftMenuIcon from './LeftMenuIcon';
import Page from './Page';
const AfLeadershipButton = require('../res/images/ui/tricare-af-leadership.png');
const AfResourcesButton = require('../res/images/ui/tricare-af-resources.png');
const AfHeader = require('../res/images/ui/tricare-af-home-header.png');

const assets:AssetsInterface = {
  header:  AfHeader,
  leadershipImage: AfLeadershipButton,
  resourcesImage: AfResourcesButton
}
export interface Props {
  appPage: AppPageInterface;
  match: {url: string};
}

export interface State {
  
}

export default class SiteAirFoce extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Air Force Site");
  }
  renderRouteComponent = (Component,extraProps = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page appPage={this.props.appPage}><Component assets={assets} service={AirForceInfo} {...routeProps} {...this.props} {...extraProps} /></Page>;
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