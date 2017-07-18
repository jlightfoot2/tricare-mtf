import * as React from 'react';
import {LeadersInterface} from '../res/data/leadership';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
//import {listItemImage} from './commonStyles';
//import {ListItem} from 'material-ui/List';
import {titleStyles3,subtitleStyles3} from './commonStyles';

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

    // return <ListItem onTouchTap={this.handleItemClick} leftAvatar={<Avatar src={leader.photo} />} primaryText={leader.name} />
    return <div>
      <Divider />
      <div style={{position: 'relative',padding: 22,height: 100}} onTouchTap={this.handleItemClick}>
        
        <div style={{position: 'absolute',left: 0,width: 100,padding: 10}}>
          <Avatar size={80} src={leader.photo} />
        </div>
        <div style={{position: 'absolute',left: 100,width: '80%'}}>
          <div style={titleStyles3}>{leader.name}</div>
          <div style={subtitleStyles3}>{leader.title}</div>
          <div style={{...subtitleStyles3, color: 'grey'}}>{leader.sub_title}</div>
        </div>
      </div>
    </div>
  }
}

