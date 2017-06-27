import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import {AppPageInterface} from './AppTheme';
import BackButton from './BackButton';

export interface Props {
  hospital: CommandInterface;
  appPage: AppPageInterface;
}

export interface State {

}

export default class CommandDetails extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  componentWillMount(){
    const {appPage} = this.props;
    this.props.appPage.setPageTitle("Command Details");
    appPage.setMainIcon(<BackButton path={'/commands'} />);
  }


  render(){
    const {hospital} = this.props;
    return <div style={{backgroundColor: 'white'}}>
            <div>
              <img src={hospital.img} />
            </div>
            <div style={{backgroundColor: 'grey'}}>
              <h3>{hospital.title}</h3>
              <div>{hospital.address}</div>
              <div>{hospital.phone}</div>
            </div>
    </div>
  }
}

