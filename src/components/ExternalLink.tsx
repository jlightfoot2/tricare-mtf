import * as React from 'react';

export interface Props {
   absolutePath: string;
   target?: string;
}

export interface State {

}

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}


export default class ExternalLink extends React.Component<Props, State>{

  static defaultProps: Partial<Props> = {
    target: '_system'
  }

  handleExternalNavigation = (event) => {
     event.preventDefault();
     event.stopPropagation();

     const {absolutePath,target} = this.props;
     console.log(absolutePath);
      if(typeof (window as any).cordova === 'undefined' || typeof (window as any).cordova.InAppBrowser === 'undefined'){
        return window.open(absolutePath,target)
      }
      return (window as any).cordova.InAppBrowser.open(absolutePath, target, 'location=no');
  }

  render(){
    return <span onTouchTap={this.handleExternalNavigation}>
              {this.props.children}
           </span>;
  }
}