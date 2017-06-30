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
      <MenuItem containerElement={<Link to="/hospitals" />} primaryText="Locations" />
      <MenuItem containerElement={<Link to="/hotlines" />} primaryText="DoD Hotlines" />

      <MenuItem containerElement={<Link to="/tricare-online" />} primaryText="TRICARE Online" />
      <MenuItem containerElement={<Link to="/relay-health" />} primaryText="RelayHealth" />
      <MenuItem containerElement={<Link to="/army" />} primaryText="Army Medicine" />
      <MenuItem containerElement={<Link to="/navy" />} primaryText="Navy Medicine" />
      <MenuItem containerElement={<Link to="/air-force" />} primaryText="Air Force Medicine" />
      <MenuItem containerElement={<Link to="/favorites" />} primaryText="Favorites" />
    </IconMenu>
    );
}


export default LeftMenu;