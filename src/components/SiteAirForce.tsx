import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeadershipPage from './ServiceLeadersPage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import HomePage from '../containers/ServiceHomePage';
import { Route } from 'react-router-dom';
import {AirForceInfo} from '../res/data/services';
import {AssetsInterface} from './ServiceHomePage';
import BackButton from './BackButton';
import {withServicesInfo} from './RoutePage';
const AfLeadershipButton = require('../res/images/ui/tricare-af-leadership.png');
const AfResourcesButton = require('../res/images/ui/tricare-af-resources.png');
const AfHeader = require('../res/images/ui/tricare-af-home-header.png');

const assets:AssetsInterface = {
  header:  AfHeader,
  leadershipImage: AfLeadershipButton,
  resourcesImage: AfResourcesButton,
  facebookImage: require('../res/images/ui/tricare-af-facebook.png'),
  twitterImage: require('../res/images/ui/tricare-af-twitter.png'),
  websiteImage: require('../res/images/ui/tricare-af-website.png'),
  youTubeImage: require('../res/images/ui/tricare-af-youtube.png'),
  backgroundImage: require('../res/images/ui/tricare-af-background.png')
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

  render(){
    const {match,appPage} = this.props;
    const childProps = {assets,service: AirForceInfo,appPage};
    return <div>
              <Route exact path={match.url} render={withServicesInfo(HomePage,childProps)} />
              <Route exact path={match.url + "/leaders"} render={withServicesInfo(LeadershipPage,{...childProps,leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/leaders/:id"} render={withServicesInfo(LeadershipDetailsPage,{...childProps,leftIcon: <BackButton path={match.url + "/leaders"} />})} />
    </div>;
  }
}