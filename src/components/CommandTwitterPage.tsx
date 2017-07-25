import * as React from 'react';
import Twitter from './Twitter';
import {AppPageInterface} from './AppTheme';
import {CommandInterface} from '../res/data/commands';
import BackButton from './BackButton';

export interface Props {
  appPage: AppPageInterface;
  command: CommandInterface
}

export interface State {

}

export default class CommandTwitterPage extends React.Component<Props, State>{

  componentWillMount(){
    const {appPage,command} = this.props;
    appPage.setPageTitle("Command Twitter");
    appPage.setMainIcon(<BackButton path={'/commands/' + command.id} />);
    appPage.setTitlePath('/commands/' + command.id);
  }

  render(){
    const {command} = this.props;
    return <Twitter appPage={this.props.appPage} link={command.twitter} />;
  }
}

