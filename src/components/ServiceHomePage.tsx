import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import {ServiceInterface} from '../res/data/services';
import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink';

const tricareBanner = require('../res/images/ui/tricare-banner.png');
/*
const buttonRowSpacing = {
  margin: '40px auto 40px auto',
  padding: '40px auto 40px auto'
}*/
let styles = {
//  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto',
  width: 500
}

let bgStyles = {
 
    position: "fixed" as 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: -1
} 

export interface AssetsInterface {
    header: string;
    leadershipImage: string;
    resourcesImage: string;
    facebookImage: string;
    twitterImage: string;
    youTubeImage: string;
    websiteImage: string;
    backgroundImage: string;
}

export interface Props {
  appPage: AppPageInterface;
  service: ServiceInterface;
  leadershipImage: string;
  resourcesImage: string;
  assets: AssetsInterface;
  match:{url: string};
  //leftIcon: JSX.Element;
}

export interface State {
  
}

export default class ServiceHomePage extends React.Component<Props, State>{
  static maxWidth:number = 640;
  componentWillMount(){
    const {service} = this.props;
    this.props.appPage.setPageTitle(service.title + " Home");
    //this.props.appPage.setMainIcon(leftIcon);
    console.log(this.props);
  }

  getMainButtonWidth = () => {
    return this.getContentWidth();
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = ServiceHomePage.maxWidth;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.95;
  }

  render(){
    const {assets,match,appPage,service} = this.props;
    console.log(service);
    styles = {...styles, width: this.getContentWidth()};
    bgStyles = {...bgStyles, background:  `url(${assets.backgroundImage}) repeat`, height: appPage.screen.height + "px"}

    const halfButtonStyles = {
      width: this.getContentWidth() / 2
    }
    return <div>
              <div style={bgStyles} />
              <div style={styles}>
              
                <div>
                    <img style={{width: this.getMainButtonWidth()}} src={assets.header} />
                </div>
                <div>
                  <Link to={match.url + '/leaders'}>
                    <img style={{width: this.getMainButtonWidth()}} src={assets.leadershipImage} />
                  </Link>
                </div>
                <div>
                  <Link to={match.url + '/resources'}>
                    <img style={{width: this.getMainButtonWidth()}} src={assets.resourcesImage} />
                  </Link>
                </div>
                <div>
                    <Link to={match.url + '/facebook'}>
                      <img style={halfButtonStyles} src={assets.facebookImage} />
                    </Link>
                    <Link to={match.url + '/twitter'}>
                      <img style={halfButtonStyles} src={assets.twitterImage} />
                    </Link>
                </div>
                <div>
                    <ExternalLink absolutePath={service.youtube}>
                      <img style={halfButtonStyles} src={assets.youTubeImage} />
                    </ExternalLink>

                    <ExternalLink absolutePath={service.website}>
                      <img style={halfButtonStyles} src={assets.websiteImage} />
                    </ExternalLink>
                </div>
                <div>
                    <img style={{width: this.getMainButtonWidth()}} src={tricareBanner} />
                </div>
            </div>
          </div>;
  }
}