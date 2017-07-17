import * as React from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import ActionSearch from 'material-ui/svg-icons/action/search';


export interface Props {
  searchHospitals(text: string): void;
  searchText: string;
  handleToggleFilter: () => void;
}

export interface State {

}

const getHintText = () => {
  return <div>
    Search Here
    <ActionSearch color={"rgba(0, 0, 0, 0.3)"} style={{position: 'relative',top: 9,left: 4}} />
  </div>;
}

export default class ListTextSearch extends React.Component<Props, State>{
  public searchInputField; 

  handleTextFocus = (event) => {
     const {handleToggleFilter} = this.props;
     handleToggleFilter();
  }
  render(){
    const {searchHospitals, searchText} = this.props;
    const clearSearch = (event) => {
        searchHospitals("");
    }

    return <div>
             <div style={{width: 50, float: 'left'}}>
              {searchText.length > 0 && <IconButton onTouchTap={clearSearch}><ClearIcon /></IconButton>}
             </div>
             <div style={{width: 120, float: 'right'}}>

                <TextField
                  onFocus={this.handleTextFocus}
                  style={{width: 120}}
                  value={searchText}
                  hintText={getHintText()} 
                  
                  onChange={(event,newValue) => {
                    searchHospitals(newValue);
                  }} 
                />

             </div>
          </div>
  }

}