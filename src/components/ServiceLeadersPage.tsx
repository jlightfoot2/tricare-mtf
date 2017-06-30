import * as React from 'react';
import LeadershipContainer from '../containers/Leadership';
import {ServiceInterface} from '../res/data/services';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  service: ServiceInterface;
  match:{url: string}
}

export interface State {
  
}

export default class ServiceLeadershipPage extends React.Component<Props, State>{

  componentWillMount(){
    const {service,appPage} = this.props;
    appPage.setPageTitle(service.title + " Leadership");
  }

  render(){
    const {service} = this.props;
    return <div style={{backgroundColor: 'white'}}>
              <LeadershipContainer service={service} />
    </div>;
  }
}