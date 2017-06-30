import * as React from 'react';
import AppBar from '../containers/AppBar';
//import ProductsEdit from '../containers/ProductsEdit';

import SiteAirForce from './SiteAirForce';
import SiteArmy from './SiteArmy';
import SiteNavy from './SiteNavy';

import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import CommandDetailsPage from '../containers/CommandDetailsPage';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import BackButton from './BackButton';
import {withRouter} from 'react-router-dom';
import {withPageInfo} from './RoutePage';

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
  history: any;
}
export interface Props {
  setPageTitle(title:string): void;
  history: any;
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
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history
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
                  console.log(this.getScreenDimensions());
                 this.setState({
                   screen: this.getScreenDimensions()
                 }); 
                  
                },
              200);
       }

      
    }
  }

  renderRouteComponent = (Component,extraProps:any = {}) => {
    return (routeProps) => {
      const defaultExtra = {
        leftIcon: <LeftMenuIcon />,
        appPage: this.getAppPageObject()
      };
      extraProps = {...defaultExtra,...extraProps};
      return <Component {...routeProps} {...extraProps}  />;
    }
  }

  render(){

    const childProps = {appPage: this.getAppPageObject()};
    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <AppBar leftIcon={this.state.leftIcon} /> 
              <div>
                
                <Route exact path="/" render={withPageInfo(HomePage,childProps)} />
                <Route exact path="/hospitals" render={withPageInfo(CommandsPage,childProps)} />
                <Route exact path="/commands/:id" render={withPageInfo(CommandDetailsPage,childProps)} />
                

                <Route path="/army" render={withPageInfo(SiteArmy,childProps)} />
                <Route path="/navy" render={withPageInfo(SiteNavy,childProps)} />
                <Route path="/air-force" render={withPageInfo(SiteAirForce,childProps)} />

              </div>
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
