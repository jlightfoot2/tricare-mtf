import * as React from 'react';
import {greyContainer} from './commonStyles';
import LocationToggle from '../containers/LocationToggle';
export interface Props {

}

export interface State {

}

export default class LocationWidget extends React.Component<Props, State>{

  render(){
    return <div style={greyContainer}>
       <LocationToggle />
    </div>;
  }
}