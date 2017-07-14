import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import Hotlines from '../containers/Hotlines';

export interface Props {
  appPage: AppPageInterface;
  match:{url: string};
}

export interface State {

}

export default class HotlinesPage extends React.Component<Props, State>{



  componentWillMount(){
    this.props.appPage.setPageTitle("DoD Hotlines");
  }

  render(){
    return <div style={{backgroundColor: 'white'}}>
             
              <Hotlines />

           </div>;
  }
}