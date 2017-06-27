import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import LeftMenuIcon from './LeftMenuIcon';
export interface Props {
  appPage: AppPageInterface
}

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  
  componentWillUnmount(){
    const {appPage} = this.props;
    appPage.setMainIcon(<LeftMenuIcon />);
  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}