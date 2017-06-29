import * as React from 'react';
import {LeadersInterface} from '../res/data/leadership';


export interface Props {
  leader: LeadersInterface;
}

export interface State {

}

export default class LeadershipDetails extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }

  render(){
    const {leader} = this.props;

    return <div>
        <img src={leader.photo} />
        <h2>{leader.name}</h2>
        <div dangerouslySetInnerHTML={{__html: leader.bio}} />
    </div>
  }
}

