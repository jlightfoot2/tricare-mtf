import * as React from 'react';
import AppBar from 'material-ui/AppBar';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export interface Props {
  leftIcon: JSX.Element,
  title: string;
}

export interface State {
}

export default class AppTheme extends React.Component<Props, State>{


  render(){
    const {title,leftIcon} = this.props;
    return <AppBar title={title} iconElementLeft={leftIcon} />;
  }
}