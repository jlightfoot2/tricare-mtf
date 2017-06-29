import * as React from 'react';
import LeaderListItem  from './LeaderListItem';
import {LeadersInterface} from '../res/data/leadership';
export interface Props {
  leaders: LeadersInterface[];
  itemClick(hospital: LeadersInterface): void;
}

export interface State {
  
}

export default class Leadership extends React.Component<Props, State>{
  handleItemClick = (leader) => {
      const {itemClick} = this.props;
      itemClick(leader);
  }
  render(){
    const {leaders} = this.props;
    return <div>
              {leaders.map(leader => <LeaderListItem itemClick={this.handleItemClick} leader={leader} key={leader.id} />)}
              </div>;
  }
}