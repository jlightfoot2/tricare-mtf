import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import {ServiceInterface} from '../res/data/services';
import { Link } from 'react-router-dom';
/*
const buttonRowSpacing = {
  margin: '40px auto 40px auto',
  padding: '40px auto 40px auto'
}*/
let styles = {
  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto',
  width: 500
}
export interface AssetsInterface {
    header: string;
    leadershipImage: string;
    resourcesImage: string;
}

export interface Props {
  appPage: AppPageInterface;
  service: ServiceInterface;
  leadershipImage: string;
  resourcesImage: string;
  assets: AssetsInterface;
  match:{url: string};
  leftIcon: JSX.Element;
}

export interface State {
  
}

export default class ServiceHomePage extends React.Component<Props, State>{
  static maxWidth:number = 640;
  componentWillMount(){
    const {service,leftIcon} = this.props;
    this.props.appPage.setPageTitle(service.title + " Home");
    this.props.appPage.setMainIcon(leftIcon);
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
    const {assets,match} = this.props;
    styles.width = this.getContentWidth();
    return <div style={styles}>
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
    </div>;
  }
}