import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import HospitalIcon from 'material-ui/svg-icons/maps/local-hospital';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import ExternalLink from './ExternalLink';

const tricareIconPath = require('../res/images/ui/tricare-online-icon.png');
const relayIconPath = require('../res/images/ui/tricare-relayhealth-icon.png');
const armyIconPath = require('../res/images/ui/tricare-army-icon.png');
const navyIconPath = require('../res/images/ui/tricare-navy-icon.png');
const airforceIconPath = require('../res/images/ui/tricare-airforce-icon.png');

import {drawerContainerStyles,drawerImageIconStyles,drawerLargeImageIconStyles} from './commonStyles';
export interface Props {
  open: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
  navigate: (path: string) => void;
}

export interface State {
 
}
export default class LeftMenu extends React.Component<Props, State>{
    constructor (props, context) {
      super(props);
    }

    handleToggle = (event) => {
      const {toggleDrawer} = this.props;
      event.preventDefault();
      event.stopPropagation();

      toggleDrawer();
    }
  handleClose = (event) => {
    const {setDrawerOpen} = this.props;
    setDrawerOpen(false);
  };

  handleNavigation = (path) => {
    const {navigate,setDrawerOpen} = this.props;
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      navigate(path);
      setDrawerOpen(false);
    }
  };

  render(){
     return (<div>
        <IconButton onTouchTap={this.handleToggle}><MoreVertIcon color="white" /></IconButton>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => {
            this.props.setDrawerOpen(open);
          }}
          containerStyle={drawerContainerStyles}
        >
        <Menu>
          <MenuItem style={{color: 'white'}} leftIcon={<HomeIcon color={'white'} />} onTouchTap={this.handleNavigation("/")}  primaryText="Home" />
          <MenuItem style={{color: 'white'}} leftIcon={<HospitalIcon color={'white'} />} onTouchTap={this.handleNavigation("/commands")} primaryText="Locations" />
          <MenuItem style={{color: 'white'}} leftIcon={<PhoneIcon color={'white'} />} onTouchTap={this.handleNavigation("/hotlines")}  primaryText="DoD Hotlines" />
          <ExternalLink absolutePath={'https://www.tricare.mil'}>
            <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} primaryText="TRICARE Online">
              <img style={drawerImageIconStyles} src={tricareIconPath} />
            </MenuItem>
          </ExternalLink>
          <ExternalLink absolutePath={'https://app.relayhealth.com/'}>
            <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} primaryText="RelayHealth">
              <img style={drawerLargeImageIconStyles} src={relayIconPath} />
            </MenuItem>
          </ExternalLink>
          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleNavigation("/army")} primaryText="Army Medicine">
            <img style={drawerLargeImageIconStyles} src={armyIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleNavigation("/navy")}  primaryText="Navy Medicine">
            <img style={drawerLargeImageIconStyles} src={navyIconPath} />
          </MenuItem>
          <MenuItem  style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleNavigation("/air-force")} primaryText="Air Force Medicine">
            <img style={drawerLargeImageIconStyles} src={airforceIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} leftIcon={<FavoriteIcon color={'white'} />} onTouchTap={this.handleNavigation("/favorites")} primaryText="Favorites" />
          <MenuItem style={{color: 'grey'}}  primaryText="Verson 1.0.3" />
        </Menu>
        </Drawer>
      </div>);
  }
}