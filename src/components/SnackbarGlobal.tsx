import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';

export interface Props {
  message: string;
  open: boolean;
  clearMessage();
}

export interface State {
}

export default class SnackbarGlobal extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
     message: '',
     open: false
  }
  constructor(props){
    super(props);
  }

  handleOnclick = (event) => {
    const {clearMessage} = this.props;
    clearMessage();
  }
  
  render(){
                

    return  <Snackbar 
              open={this.props.open}
              message={this.props.message}
              onActionTouchTap={this.handleOnclick}
              action="Close" 
              />;
  }
}