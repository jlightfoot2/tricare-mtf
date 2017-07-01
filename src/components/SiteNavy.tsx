import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeadershipPage from './ServiceLeadersPage';
import FacebookPage from './FaceBookPage';
import TwitterPage from './TwitterPage';
import { Route } from 'react-router-dom';
import {NavyInfo} from '../res/data/services';
import HomePage from '../containers/ServiceHomePage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import {AssetsInterface} from './ServiceHomePage';
import BackButton from './BackButton';
import {withServicesInfo} from './RoutePage';

const NavyLeadershipButton = require('../res/images/ui/tricare-navy-leadership.png');
const NavyResourcesButton = require('../res/images/ui/tricare-navy-resources.png');
const NavyHeader = require('../res/images/ui/tricare-navy-home-header.png');


const assets:AssetsInterface = {
  header:  NavyHeader,
  leadershipImage: NavyLeadershipButton,
  resourcesImage: NavyResourcesButton,
  facebookImage: require('../res/images/ui/tricare-navy-facebook.png'),
  twitterImage: require('../res/images/ui/tricare-navy-twitter.png'),
  websiteImage: require('../res/images/ui/tricare-navy-website.png'),
  youTubeImage: require('../res/images/ui/tricare-navy-youtube.png'),
  backgroundImage: require('../res/images/ui/tricare-navy-background.png')
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

  render(){
    const {match,appPage} = this.props;
    const childProps = {assets,service: NavyInfo,appPage};
    return <div>
              <Route exact path={match.url} render={withServicesInfo(HomePage,childProps)} />
              <Route exact path={match.url + "/facebook"} render={withServicesInfo(FacebookPage,childProps)} />
              <Route exact path={match.url + "/twitter"} render={withServicesInfo(TwitterPage,childProps)} />
              <Route exact path={match.url + "/leaders"} render={withServicesInfo(LeadershipPage,{...childProps,leftIcon: <BackButton path={match.url} />})} />
              <Route exact path={match.url + "/leaders/:id"} render={withServicesInfo(LeadershipDetailsPage,{...childProps,leftIcon: <BackButton path={match.url + "/leaders"} />})} />
    </div>;
  }
}