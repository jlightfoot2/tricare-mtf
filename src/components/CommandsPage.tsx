import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandsList';
import {AppPageInterface} from './AppTheme'
import BackButton from './BackButton';

export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}

export default class CommandsPage extends React.Component<Props, State>{

  componentWillMount(){
    const {appPage} = this.props;
    this.props.appPage.setPageTitle("Commands");
    appPage.setMainIcon(<BackButton path={'/'} />);
  }

  render(){

    return <div style={{backgroundColor: 'white'}}>
              <CommandHospitalsContainer />
    </div>;
  }
}