import * as React from 'react';
import AppBar from '../containers/AppBar';
//import ProductsEdit from '../containers/ProductsEdit';

import SiteAirForce from './SiteAirForce';
import SiteArmy from './SiteArmy';
import SiteNavy from './SiteNavy';

import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import LeadershipPage from './LeadersPage';
import LeadershipDetailsPage from '../containers/LeadershipDetailsPage';
import CommandDetailsPage from '../containers/CommandDetailsPage';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {withRouter} from 'react-router-dom';
import Page from '../Containers/Page';
const muiTheme = getMuiTheme({
  palette: {
    
    textColor: '#000000',
    primary1Color: '#000000',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'

  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  screen:{width: number, height: number};
  setMainIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
}
export interface Props {
  setPageTitle(title:string): void;
}

export interface State {
  screen:{width: number, height: number}
  title: string;
  leftIcon: JSX.Element;
}
class App extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: <LeftMenuIcon />
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }

  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle
    }
  }



  componentDidMount(){
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    return {
       width: window.innerWidth,
       height: window.innerHeight
    }
  }

  hasScreenChanged = () => {
    const {width, height} = this.state.screen;
    const currentDims = this.getScreenDimensions();

    if(width !== currentDims.width){
      return true;
    }
    if(height !== currentDims.height){
      return true;
    }
    return false;
  }

  handlePageResize = () => {
    let resizeTimeoutId = null;
    window.onresize = () => {
       if(resizeTimeoutId){
         clearTimeout(resizeTimeoutId);
       }

       if(this.hasScreenChanged()){

         resizeTimeoutId = setTimeout(
                () => {
                  
                 this.setState({
                   screen: this.getScreenDimensions()
                 }); 
                  
                },
              500);
       }

      
    }
  }
  renderRouteComponent = (Component,extraProps = {}) => {
    return (routeProps) => {
      return <Page {...routeProps} {...extraProps} appPage={this.getAppPageObject()}><Component  /></Page>;
    }
  }
  
  render(){
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <AppBar leftIcon={this.state.leftIcon} /> 
              <div style={{padding: '10px'}}>
                
                <Route exact path="/" render={this.renderRouteComponent(HomePage)} />
                <Route exact path="/commands" render={this.renderRouteComponent(CommandsPage)} />
                <Route exact path="/commands/:id" render={this.renderRouteComponent(CommandDetailsPage)} />
                
                <Route exact path="/leaders" render={this.renderRouteComponent(LeadershipPage)} />

                <Route path="/army" render={this.renderRouteComponent(SiteArmy)} />
                <Route path="/navy" render={this.renderRouteComponent(SiteNavy)} />
                <Route path="/air-force" render={this.renderRouteComponent(SiteAirForce)} />

                <Route exact path="/leaders/army" render={this.renderRouteComponent(LeadershipPage,{service_id: 1})} />
                <Route exact path="/leaders/navy" render={this.renderRouteComponent(LeadershipPage,{service_id: 2})} />
                <Route exact path="/leaders/air-force" render={this.renderRouteComponent(LeadershipPage,{service_id: 3})} />

                <Route exact path="/leaders/:id" render={this.renderRouteComponent(LeadershipDetailsPage)} />
              </div>
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
