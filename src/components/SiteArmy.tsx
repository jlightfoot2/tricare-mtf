import * as React from 'react';
import {AppPageInterface} from './AppTheme'
import LeadershipPage from './ServiceLeadersPage';
import { Route } from 'react-router-dom';
import {ArmyInfo} from '../res/data/services';
import HomePage from '../containers/ServiceHomePage';
import {AssetsInterface} from './ServiceHomePage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import BackButton from './BackButton';
import FacebookPage from './FaceBookPage';
import TwitterPage from './TwitterPage';
import {withServicesInfo} from './RoutePage';
const ArmyLeadershipButton = require('../res/images/ui/tricare-army-leadership.png');
const ArmyResourcesButton = require('../res/images/ui/tricare-army-resources.png');
const ArmyHeader = require('../res/images/ui/tricare-army-home-header.png');

const assets:AssetsInterface = {
  header:  ArmyHeader,
  leadershipImage: ArmyLeadershipButton,
  resourcesImage: ArmyResourcesButton,
  facebookImage: require('../res/images/ui/tricare-army-facebook.png'),
  twitterImage: require('../res/images/ui/tricare-army-twitter.png'),
  websiteImage: require('../res/images/ui/tricare-army-website.png'),
  youTubeImage: require('../res/images/ui/tricare-army-youtube.png'),
  backgroundImage: require('../res/images/ui/tricare-army-background.png')
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
  
  render(){

    const {match,appPage} = this.props;
    const childProps = {assets,service: ArmyInfo,appPage};
    return <div>
              <Route exact path={match.url} render={withServicesInfo(HomePage,childProps)} />
              <Route exact path={match.url + "/facebook"} render={withServicesInfo(FacebookPage,{...childProps,leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/twitter"} render={withServicesInfo(TwitterPage,{...childProps,leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/leaders"} render={withServicesInfo(LeadershipPage,{...childProps,leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/leaders/:id"} render={withServicesInfo(LeadershipDetailsPage,{...childProps,leftIcon: <BackButton path={match.url + "/leaders"} />})} />
    </div>;
  }
}