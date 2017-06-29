import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeadershipPage from './LeadersPage';
import { Route } from 'react-router-dom';
export interface Props {
  appPage: AppPageInterface;
  match: {url: string};
}

export interface State {
  
}

export default class SiteAirFoce extends React.Component<Props, State>{

  componentWillMount(){
    this.props.appPage.setPageTitle("Air Force Site");
  }
  renderRouteComponent = (Component,extraProps = {}) => {
    return (routeProps) => {
      return <Component {...routeProps} {...this.props} {...extraProps} />
    };
  }
  render(){
    const {match} = this.props;
    return <div style={{backgroundColor: 'white'}}>
              <Route path={match.url + "/leaders"} render={this.renderRouteComponent(LeadershipPage)} />
    </div>;
  }
}