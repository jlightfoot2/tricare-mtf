import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <IconMenu

      iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem containerElement={<Link to="/" />} primaryText="Home" />
      <MenuItem containerElement={<Link to="/commands" />} primaryText="Locations" />
      

      <MenuItem containerElement={<Link to="/army" />} primaryText="Army" />
      <MenuItem containerElement={<Link to="/army/leaders" />} primaryText="Army Leaders" />
      <MenuItem containerElement={<Link to="/navy" />} primaryText="Navy" />
      <MenuItem containerElement={<Link to="/air-force" />} primaryText="Air Force" />

    </IconMenu>
    );
}


export default LeftMenu;