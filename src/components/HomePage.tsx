import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import ExternalLink from './ExternalLink';
import { Link } from 'react-router-dom';


const triLocationsImage = require("../res/images/ui/tricare-home-locations.png");
const triHotlineImage = require("../res/images/ui/tricare-home-hotlines.png");
const triOnlineImage = require("../res/images/ui/tricare-home-tricare-online.png");

const armyMedicineImage = require("../res/images/ui/tricare-home-army.png");
const navyMedicineImage = require("../res/images/ui/tricare-home-navy.png");
const afMedicineImage = require("../res/images/ui/tricare-home-af.png");

let styles = {
  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto'
};

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  leftIcon: JSX.Element;
}

export interface State {
  
}

export default class HomePage extends React.Component<Props, State>{
  static maxWidth:number = 640;

  componentWillMount(){
    const {leftIcon} = this.props;
    this.props.appPage.setPageTitle("MHS Home");
    this.props.appPage.setMainIcon(leftIcon);
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth =  HomePage.maxWidth;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.95;
  }
  render(){
    const contentWidth = this.getContentWidth();
    styles = {...styles, width: contentWidth};
    const columnStyles = {
      width: contentWidth  / 2,
      float: 'left',
      margin: '0px auto 0px auto'
    };

    const halfImageStyles = {
      width: contentWidth / 2,
    };

    return <div style={styles}>
              <div style={columnStyles}>
            
                  <Link to={"/commands"}><img style={halfImageStyles} src={triLocationsImage} /></Link>
 
                  <Link to={"/hotlines"}><img style={halfImageStyles} src={triHotlineImage} /></Link>

                  <ExternalLink absolutePath={"https://www.tricare.mil"}><img style={halfImageStyles} src={triOnlineImage} /></ExternalLink>
           
              </div>
              <div style={columnStyles}>
              
                  <Link to={"/army"}><img style={halfImageStyles} src={armyMedicineImage} /></Link>

                  <Link to={"/navy"}><img style={halfImageStyles} src={navyMedicineImage} /></Link>
        
                  <Link to={"/air-force"}><img style={halfImageStyles} src={afMedicineImage} /></Link>
               
              </div>
 
    </div>;
  }
}