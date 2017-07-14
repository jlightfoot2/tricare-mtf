import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import HospitalIcon from 'material-ui/svg-icons/maps/local-hospital';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';


import { Link } from 'react-router-dom';
import {drawerContainerStyles} from './commonStyles';
export interface Props {

}

export interface State {
  open: boolean; 
}
export default class LeftMenu extends React.Component<Props, State>{
    constructor (props, context) {
      super(props);
      this.state = {open: false};
    }

    handleToggle = (event) => {
        event.preventDefault();
        event.stopPropagation();

       this.setState({open: !this.state.open});
    }
  handleClose = () => this.setState({open: false});
  render(){
     return (<div>
        <IconButton onTouchTap={this.handleToggle}><MoreVertIcon color="white" /></IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          containerStyle={drawerContainerStyles}
        >
          <MenuItem leftIcon={<HomeIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/" />} primaryText="Home" />
          <MenuItem leftIcon={<HospitalIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/hospitals" />} primaryText="Locations" />
          <MenuItem leftIcon={<PhoneIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/hotlines" />} primaryText="DoD Hotlines" />

          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/tricare-online" />} primaryText="TRICARE Online" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/relay-health" />} primaryText="RelayHealth" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/army" />} primaryText="Army Medicine" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/navy" />} primaryText="Navy Medicine" />
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/air-force" />} primaryText="Air Force Medicine" />
          <MenuItem leftIcon={<FavoriteIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/favorites" />} primaryText="Favorites" />
        </Drawer>
      </div>);
  }
}