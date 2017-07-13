import * as React from 'react';
import {AppPageInterface} from './AppTheme';
export interface Props {
  appPage: AppPageInterface;
  leftIcon: JSX.Element;
  titlePath: string; //the path navigated to when appbar title is clicked
}

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  
  componentWillMount(){
    const {appPage,leftIcon,titlePath} = this.props;
    appPage.setMainIcon(leftIcon);
    appPage.setTitlePath(titlePath);
  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}