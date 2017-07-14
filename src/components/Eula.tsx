import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';
import {fullWidthDialagStyle} from './commonStyles';
import {eula} from '../res/data/settings';


interface MyProps {
  eulaAccepted: boolean;
  accept(): any;
  reject(): any;
  hideRejectButton: boolean;
}

interface MyState {
  suppressOpen: boolean;
}

export default class Eula extends React.Component<MyProps, MyState> {
  constructor(props){
    super(props);
    this.state = {suppressOpen: true};
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({suppressOpen: false});
    },2000);
  }

  render(){
    const {accept,reject,eulaAccepted,hideRejectButton} = this.props;
    let actions = [
      <FlatButton
        label="Accept"
        primary={true}
        onTouchTap={accept}
      />
    ];

    if(!hideRejectButton){
      actions.push(<FlatButton
            label="Reject"
            primary={true}
            onTouchTap={reject}
        />);
    }

    return (
      <div>
    
        <Dialog
          title="EULA"
          actions={actions}
          modal={false}
          open={!eulaAccepted && !this.state.suppressOpen}
          contentStyle={fullWidthDialagStyle}
          autoScrollBodyContent={true}
        >
          <h3>{eula.title}</h3>
          {eula.paragraphs.map((para,i) => <p key={i}>{para}</p>)}

        </Dialog>
      </div>
    );
  }
}