import * as React from 'react';
import Toggle from 'material-ui/Toggle';

export interface Props {
  toggle: (isInputChecked: boolean) => void;
  isToggled: boolean;
}

export interface State {

}


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#F5F5F5',
  },
  trackOff: {
    backgroundColor: '#BDBDBD',
  },
  thumbSwitched: {
    backgroundColor: '#00BCD4',
  },
  trackSwitched: {
    backgroundColor: '#7FDDE9',
  },
  labelStyle: {
    color: 'red',
  },
};

export default class LocationToggle extends React.Component<Props, State>{

  handleOnToggle = (event: any, isInputChecked: boolean) => {
    const {toggle} = this.props;
    toggle(isInputChecked);
  }

  render(){
    const {isToggled} = this.props;
    const label =  isToggled ? "Location Service On" : "Location Service Off";
    return     <Toggle
                  label={label}
                  toggled={isToggled}
                  onToggle={this.handleOnToggle}
                  thumbStyle={styles.thumbOff}
                  trackStyle={styles.trackOff}
                  thumbSwitchedStyle={styles.thumbSwitched}
                  trackSwitchedStyle={styles.trackSwitched}
                />;
  }
}


