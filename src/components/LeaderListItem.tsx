import * as React from 'react';
import {LeadersInterface} from '../res/data/leadership';
import Avatar from 'material-ui/Avatar';
//import {listItemImage} from './commonStyles';
import {ListItem} from 'material-ui/List';

export interface Props {
  leader: LeadersInterface;
  itemClick(leader: LeadersInterface);
}

export interface State {

}

export default class LeaderListItem extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  handleItemClick = (event) => {
    const {itemClick,leader} = this.props;
    itemClick(leader);
  }
  render(){
    const {leader} = this.props;

    return <ListItem onTouchTap={this.handleItemClick} leftAvatar={<Avatar src={leader.photo} />} primaryText={leader.name} />
  }
}

