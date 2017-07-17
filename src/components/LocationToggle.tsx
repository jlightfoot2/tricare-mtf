import * as React from 'react';
import Toggle from 'material-ui/Toggle';

export interface Props {
  toggle: (isInputChecked: boolean) => void;
  isToggled: boolean;
}

export interface State {

}

export default class LocationToggle extends React.Component<Props, State>{

  handleOnToggle = (event: any, isInputChecked: boolean) => {
    const {toggle} = this.props;
    toggle(isInputChecked);
  }

  render(){
    const {isToggled} = this.props;
    const label =  isToggled ? "Location Enabled" : "Location Disabled";
    return     <Toggle
                  label={label}
                  toggled={isToggled}
                  onToggle={this.handleOnToggle}
                />;
  }
}


