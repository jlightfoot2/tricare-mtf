import * as React from 'react';
import Twitter from './Twitter';
import {AppPageInterface} from './AppTheme';
import {ServiceInterface} from '../res/data/services';

export interface Props {
  appPage: AppPageInterface;
  link: string;
  service: ServiceInterface;
}

export interface State {

}

export default class ServiceTwitterPage extends React.Component<Props, State>{


  render(){
    const {service} = this.props;
    return <Twitter appPage={this.props.appPage} link={service.twitter} />;
  }
}

