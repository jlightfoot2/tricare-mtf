import * as React from 'react';
import {LeadersInterface} from '../res/data/leadership';
import {AppPageInterface} from './AppTheme'
import LeadershipDetails from './LeadershipDetails';

export interface Props {
  appPage: AppPageInterface;
  leader: LeadersInterface;
  //leftIcon: JSX.Element;
}

export interface State {
  
}

export default class CommandsPage extends React.Component<Props, State>{

  componentWillMount(){
    //const {leftIcon} = this.props;
    this.props.appPage.setPageTitle("Leader Details");
 
    //this.props.appPage.setMainIcon(leftIcon);
  }

  render(){
    const {leader} = this.props;
    return <LeadershipDetails leader={leader} />;
  }
}