
import * as React from 'react';
import {ServiceInterface} from '../res/data/services';
import LeftMenuIcon from './LeftMenuIcon';
import Page from './Page';
import {AssetsInterface} from './ServiceHomePage';
/**
 * 
 * This is a Higher-Order Component
 * @param  {[type]} WrappedComponent       [description]
 * @param  {[type]} assets:AssetsInterface [description]
 * @param  {[type]} service:               ServiceInterface [description]
 * @param  {Object} extraProps:any         [description]
 * @return {[type]}                        [description]
 */
export const withServicesInfo = (WrappedComponent,extraProps:{assets: AssetsInterface,service: ServiceInterface, appPage:any, [propName: string]: any}) => {
    const {assets,service} = extraProps;
    return (routeProps) => {
      const defaultExtra = {
        appPage: extraProps.appPage,
        leftIcon: <LeftMenuIcon />,
        titlePath: "/"
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page titlePath={extraProps.titlePath} leftIcon={extraProps.leftIcon} appPage={extraProps.appPage}><WrappedComponent {...extraProps} assets={assets} service={service} {...routeProps} /></Page>;
    };
}

export const withPageInfo = (Component,extraProps:{appPage:any, [propName: string]: any}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />,
        appPage: extraProps.appPage,
        titlePath: "/"
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Page titlePath={extraProps.titlePath} leftIcon={extraProps.leftIcon} appPage={extraProps.appPage}><Component {...routeProps} {...extraProps} /></Page>;
    }
}

/*
export default class RoutePage extends React.Component<any, {}>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Air Force Site");
  }

  render(){
    const {leftIcon,appPage,assets,service} = this.props;
      return <Page leftIcon={leftIcon} appPage={appPage}><WrappedComponent assets={assets} service={service} {...this.props} /></Page>;
  }
}*/