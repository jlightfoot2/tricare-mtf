import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ActionSearch from 'material-ui/svg-icons/action/search';
export interface Props {
  searchData:{id: number,description: string, title:string,latitude:number, longitude:number}[];
  setUserLocation: (latitude:number, longitude:number) => void;
  searchGeo: (searchStr: string) => void;
  sortText: string;
}

export interface State {

}
const getHintText = () => {
  return <div>
    City or Zip
    <ActionSearch color={"rgba(0, 0, 0, 0.3)"} style={{position: 'relative',top: 9,left: 4}} />
  </div>;
}
export default class GoeSearchFields extends React.Component<Props, State>{
  public searchTimeout: number;

  handleSelect = (chosenRequest: any, index: number) => {
    const {setUserLocation} = this.props;
    setUserLocation(chosenRequest.latitude,chosenRequest.longitude);
  }

  handleUpdateInput = (searchText: string) => {
    const {searchGeo} = this.props;
    
    if(this.searchTimeout){
      window.clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = window.setTimeout(() => {
        searchGeo(searchText);
    },500);
    
  }

  render(){
    const {searchData,sortText} = this.props;
    return <AutoComplete 
        searchText={sortText}
        dataSource={searchData}
        dataSourceConfig={{text: 'description', value: 'id'}}
        onNewRequest={this.handleSelect}
        onUpdateInput={this.handleUpdateInput}
        hintText={getHintText()}
        filter={(searchText, key) => {
          return true;
        }}
    />
  }
}