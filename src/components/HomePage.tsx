import * as React from 'react';
import {AppPageInterface} from './AppTheme';


const buttonRowSpacing = {
  margin: '40px auto 40px auto',
  padding: '40px auto 40px auto'
}
let styles = {
  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto',
  maxWidth: 500
}
export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  leftIcon: JSX.Element;
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{

  componentWillMount(){
    const {leftIcon} = this.props;
    this.props.appPage.setPageTitle("MHS Home");
    this.props.appPage.setMainIcon(leftIcon);
  }

  render(){

    return <div style={styles}>
              <div style={buttonRowSpacing}>
                <h2>Global Home Page</h2>
              </div>
 
    </div>;
  }
}