import * as React from 'react';
import {LeadersInterface} from '../res/data/leadership';
import {greyContainer,whiteContainer,titleStyles2} from './commonStyles';
//titleStyles1,contentContainer1,PrimaryColor,

export interface Props {
  leader: LeadersInterface;
  contentWidth: number;
}

export interface State {

}

export default class LeadershipDetails extends React.Component<Props, State>{
  static MAX_WIDTH:number = 640;
  constructor(props){
    super(props);
  }

  render(){
    const {leader} = this.props;
    const photoWidth = this.props.contentWidth * 0.4
    return <div>
        <div style={greyContainer}>
          <div style={{width: photoWidth,margin: '0px auto 0px auto'}}>
            <img style={{width: photoWidth}} src={leader.photo} />
          </div>
          <br />
          <div style={titleStyles2 as any}>{leader.title}</div>
          <div style={{textAlign: 'center'}}>{leader.name}</div>
          <br />
          <div style={{textAlign: 'center'}}>{leader.sub_title}</div>
          <br />
        </div>
        <div style={whiteContainer} dangerouslySetInnerHTML={{__html: leader.bio}} />

    </div>
  }
}

