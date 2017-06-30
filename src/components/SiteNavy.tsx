import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeadershipPage from './ServiceLeadersPage';
import { Route } from 'react-router-dom';
import {NavyInfo} from '../res/data/services';
import HomePage from '../containers/ServiceHomePage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import {AssetsInterface} from './ServiceHomePage';
import BackButton from './BackButton';
import LeftMenuIcon from './LeftMenuIcon';
const NavyLeadershipButton = require('../res/images/ui/tricare-navy-leadership.png');
const NavyResourcesButton = require('../res/images/ui/tricare-navy-resources.png');
const NavyHeader = require('../res/images/ui/tricare-navy-home-header.png');


const assets:AssetsInterface = {
  header:  NavyHeader,
  leadershipImage: NavyLeadershipButton,
  resourcesImage: NavyResourcesButton
}
export interface Props {
  appPage: AppPageInterface;
  match: {url: string};
}

export interface State {
  
}

export default class SiteNavy extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Navy Site");
  }
  
  renderRouteComponent = (Component,extraProps = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Component assets={assets} service={NavyInfo} {...routeProps} {...this.props} {...extraProps} />;
    };
  }

  render(){
    const {match} = this.props;
    return <div>
              <Route exact path={match.url} render={this.renderRouteComponent(HomePage,{leftIcon: <LeftMenuIcon />})} />
              <Route exact path={match.url + "/leaders"} render={this.renderRouteComponent(LeadershipPage,{leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/leaders/:id"} render={this.renderRouteComponent(LeadershipDetailsPage,{leftIcon: <BackButton path={match.url + "/leaders"} />})} />
    </div>;
  }
}