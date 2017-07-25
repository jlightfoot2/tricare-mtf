import * as React from 'react';
import AppBar from '../containers/AppBar';
//import ProductsEdit from '../containers/ProductsEdit';

import SiteAirForce from './SiteAirForce';
import SiteArmy from './SiteArmy';
import SiteNavy from './SiteNavy';
import HotlinesPage from './HotlinesPage';
import HomePage from './HomePage';
import CommandsPage from './CommandsPage';
import CommandDetailsPage from '../containers/CommandDetailsPage';
import HospitalFavoritesListPage from '../containers/HospitalFavoritesListPage';
import LeftMenuIcon from '../containers/LeftMenuIcon';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SnackbarGlobal from '../containers/SnackbarGlobal';
import EulaDialog from '../containers/Eula';
import BackButton from './BackButton';
import TwitterPage from '../containers/CommandTwitterPage';
//import BackButton from './BackButton';
//import Page from '../Containers/Page';
import {withRouter} from 'react-router-dom';
import {withPageInfo} from './RoutePage';

const muiTheme = getMuiTheme({
  palette: {
    
    textColor: '#000000',
    primary1Color: '#475976',
    primary2Color: '#1b4583',
    primary3Color: '#1b4583'

  },
  appBar: {
    height: 50,
  },
});

export interface AppPageInterface {
  screen:{width: number, height: number, orientation: string};
  setMainIcon(icon: JSX.Element): void;
  setPageTitle(title:string): void;
  setTitlePath(titlePath:string):void;
  history: any;
}

export interface Props {
  setPageTitle(title:string): void;
  toggleDrawer: () => void;
  history: any;
}

export interface State {
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
}
class App extends React.Component<Props, State>{

  constructor(props){
    super(props);
    this.state = {
      screen: this.getScreenDimensions(),
      title: props.title,
      leftIcon: <LeftMenuIcon />,
      titlePath: '/'
    }
  }

  handleSetMainIcon = (leftIcon: JSX.Element) => {
    this.setState({leftIcon})
  }

  handleSetTitlePath = (titlePath: string) => {
    this.setState({titlePath})
  }

  getAppPageObject = ():AppPageInterface => {
    const {setPageTitle,history} = this.props;
    return {
      screen: this.state.screen,
      setMainIcon: this.handleSetMainIcon,
      setPageTitle,
      history,
      setTitlePath: this.handleSetTitlePath
    }
  }

  componentDidMount(){
    this.handlePageResize();
  }

  getScreenDimensions = () => {
    const orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait';
 
    return {
       width: window.innerWidth,
       height: window.innerHeight,
       orientation
    }
  }

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history,toggleDrawer} = this.props;
    const {titlePath} = this.state;

    const isHomePage = (path: string) => {
      const  matchList = ['/','/navy','/army','/air-force'];
      if(matchList.indexOf(path) > -1){
        return true;
      }
      return false;
    }
    console.log(this.props.history.location.pathname);
    if(!titlePath || isHomePage(this.props.history.location.pathname)){
      toggleDrawer();
    } else {
      history.push(titlePath);
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


  render(){

    const childProps = {appPage: this.getAppPageObject()};

    return <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <AppBar  leftIcon={this.state.leftIcon} onTitleClick={this.handleTitleClick} />
              <div>
                
                <Route exact path="/" render={withPageInfo(HomePage,childProps)} />
                <Route exact path="/commands" render={withPageInfo(CommandsPage,{...childProps,leftIcon: <BackButton path="/" />})} />
                <Route exact path="/commands/:id" render={withPageInfo(CommandDetailsPage,{...childProps,titlePath: '/commands',leftIcon: <BackButton path="/commands" />})} />
                <Route exact path="/hotlines" render={withPageInfo(HotlinesPage,{...childProps,leftIcon: <BackButton path="/" />})} />
                <Route exact path="/commands/:id/twitter" render={withPageInfo(TwitterPage,{...childProps, leftIcon: <BackButton path="/" />})} />
                <Route exact path="/favorites" render={withPageInfo(HospitalFavoritesListPage,{...childProps,leftIcon: <BackButton path="/" />})} />
                <Route exact path="/favorites/:id" render={withPageInfo(CommandDetailsPage,{...childProps,titlePath: "/favorites", leftIcon: <BackButton path="/favorites" />})} />

                <Route path="/army" render={withPageInfo(SiteArmy,childProps)} />
                <Route path="/navy" render={withPageInfo(SiteNavy,childProps)} />
                <Route path="/air-force" render={withPageInfo(SiteAirForce,childProps)} />

              </div>
              <SnackbarGlobal />
              <EulaDialog />
            </div>
          </MuiThemeProvider>;
 
  }
}

export default withRouter(App);
