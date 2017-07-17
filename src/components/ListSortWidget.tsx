import * as React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {greyContainer,titleStylesLeft2} from './commonStyles';
import GeoSearchField from '../containers/GeoSearchField'
export interface Props {
  selectedRadio: string;
  onSelect: (event: any, value: any) => void;
  locationPermission: boolean;
}

export interface State {

}

export default class ListTextSearch extends React.Component<Props, State>{

  handleRadioClick = (event: any) => {
    //const {onSelect} = this.props;
  }

  render(){
    const {selectedRadio,onSelect,locationPermission} = this.props;
    const showGeoField = selectedRadio === 'zip_city_location';
    return <div style={greyContainer}>
              <div style={titleStylesLeft2}>Sort By: </div>
                         <RadioButtonGroup  name="sort" onChange={onSelect} valueSelected={selectedRadio}>
                          <RadioButton 
                            disabled={!locationPermission}
                            label="Your Location"
                            value={"current_location"} 
                          />
                          <RadioButton 
                            label="Zipcode or City"
                            value={"zip_city_location"} 
                          />
                          <RadioButton 
                            label="Alphabetical"
                            value={"default"} 
                          />
                        </RadioButtonGroup>
                        {showGeoField && <GeoSearchField  />}
             </div>;
  }

}
