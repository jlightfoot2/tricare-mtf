import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
export interface Props {
  hospitals: CommandInterface[];
  addFavorite(hospital: CommandInterface): void;
  itemClick(hospital: CommandInterface): void;
  history:{push: any}
}

export interface State {

}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props,context){
    super(props);
  }

  handleItemClick = (hospital) => {
      const {itemClick} = this.props;
      itemClick(hospital);
  }

  render(){
    const {hospitals} = this.props;
    return <div>
              <List>
                {hospitals.map(hospital => {
                  return <CommandListItem key={hospital.id} itemClick={this.handleItemClick} hospital={hospital} />
                })}
              </List>
           </div>;
  }
}