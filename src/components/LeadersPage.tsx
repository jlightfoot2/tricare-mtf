import * as React from 'react';
import LeadershipContainer from '../containers/Leadership';
import {AppPageInterface} from './AppTheme'
export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}

export default class LeadershipPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Leadership");
  }

  render(){

    return <div style={{backgroundColor: 'white'}}>
              <LeadershipContainer />
    </div>;
  }
}