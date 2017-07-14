import * as React from 'react';
import HotlineItem from './HotlineItem';
import {HotlineInterface} from '../res/data/hotlines'
import {List} from 'material-ui/List';
export interface Props {
  hotlines:HotlineInterface[];
}

export interface State {
 
}

export default class HotlinesPage extends React.Component<Props, State>{


  render(){
    const {hotlines} = this.props;
    return <List>
             
              {hotlines.map(hLine => <HotlineItem key={hLine.id} hotline={hLine} />)}

           </List>;
  }
}