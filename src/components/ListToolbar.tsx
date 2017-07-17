import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import LocationEnabledIcon from 'material-ui/svg-icons/device/location-searching';
import LocationDisabledIcon from 'material-ui/svg-icons/device/location-disabled';
import ListTextSearch from './ListTextSearch';
import ListSortWidget from './ListSortWidget';
import LocationWidget from './LocationWidget';
import {greyContainer,toolBarContentLeft,toolBarContentRight} from './commonStyles'

export interface Props {
  showTextField?: boolean;
  searchHospitals(text: string): void;
  searchText: string;
  sortHospitals(text: string,direction:string): void;
  sortConfig: {sortBy: string, sortDir: string};
  locationPermission: boolean;
  screen: {width: number, height: number, orientation: string}
}

export interface State {
  showTextField: boolean;
  selectedRadio: string;
  showSort: boolean;
  focusTextSearch: boolean;
  showLocation: boolean;
}

export default class ListToolbar extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
    showTextField: false,
    searchText: ''
  }

  constructor(props){
    super(props);
    this.state = {
      showTextField: props.showTextField,
      selectedRadio: 'current_location',
      showSort: false,
      focusTextSearch: false,
      showLocation: false
    }
  }
  handleRadioSelect = (event: any, value: any) => {
    const {sortHospitals,sortConfig} = this.props
    let direction = 'asc'
    if(value === sortConfig.sortBy){ //if last sort equals current then toggle direction
      direction = sortConfig.sortDir === 'asc' ? 'desc' : 'asc';
    }
    sortHospitals(value,direction);
  }

  handleToggleSort = () => {
    const {showSort} = this.state;
    this.setState({
      showSort: !showSort,
      showLocation: false
    });
  }

  handleToggleFilter = () => {
    this.setState({
      showSort: false,
      showLocation: false
    });
  }

  handleSearchTextElement = (element) => {

  }

  handleToggleLocationWidget = () => {
    const {showLocation} = this.state;
    this.setState({
      showLocation: !showLocation,
      showSort: false
    });
  }


  render(){
    const {showSort, showLocation} = this.state;
    const {searchHospitals,searchText,sortConfig,locationPermission} = this.props;
    const {sortBy} = sortConfig;
    const iconsWidth = 100;
    const locationIcon = locationPermission ? <LocationEnabledIcon /> : <LocationDisabledIcon />;
    return       <div>
                    <div style={{...greyContainer,height: 50, padding: 0, position: 'relative'}}>
                        <div style={{...toolBarContentLeft,right: iconsWidth, width: 170}}>
                          <ListTextSearch

                                  handleToggleFilter={this.handleToggleFilter} 
                                  searchHospitals={searchHospitals} 
                                  searchText={searchText} 
                                  />
                         </div>
                         <div style={{...toolBarContentRight, width: iconsWidth}}>
                           <IconButton onTouchTap={this.handleToggleSort}>
                             <ContentSort />
                           </IconButton>
                           <IconButton onTouchTap={this.handleToggleLocationWidget}>
                             {locationIcon}
                           </IconButton>
                         </div>
                    </div>

                    {showSort && <br />}
                    {showSort && <ListSortWidget locationPermission={locationPermission} onSelect={this.handleRadioSelect} selectedRadio={sortBy} />}
                    
                    {showLocation && <br />}
                    {showLocation && <LocationWidget />}

                 </div>
  }

}