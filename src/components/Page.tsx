import * as React from 'react';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  leftIcon: JSX.Element;
}

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  
  componentWillMount(){
    const {appPage,leftIcon} = this.props;
    appPage.setMainIcon(leftIcon);
  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}