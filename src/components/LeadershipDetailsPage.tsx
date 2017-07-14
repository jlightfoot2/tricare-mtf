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
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = LeadershipDetails.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.90;
  }
  render(){
    const {leader} = this.props;
    return <LeadershipDetails contentWidth={this.getContentWidth()} leader={leader} />;
  }
}