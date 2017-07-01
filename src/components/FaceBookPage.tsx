import * as React from 'react';
//import LeaderListItem  from './LeaderListItem';
import {AppPageInterface} from './AppTheme';
import {ServiceInterface} from '../res/data/services'
export interface Props {
  appPage: AppPageInterface;
  link: string;
  service: ServiceInterface;
}

export interface State {
  
}

export default class FaceBookPage extends React.Component<Props, State>{
  componentWillMount(){
    //const {leftIcon} = this.props;
    this.props.appPage.setPageTitle("Facebook");
 
    //this.props.appPage.setMainIcon(leftIcon);
  }
  render(){
    const {appPage,service} = this.props;
    let {width, height} = appPage.screen;
    const fbsrc = `${service.facebook}&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`;
    const maxWidth = 500; //max width fb allows for this plugin
    width = width > maxWidth ? maxWidth : width;
    const styles = {
      width,
      margin: '0px auto 0px auto'
    }
    return <div style={styles}>
              <iframe src={fbsrc} width={width} height={height} style={{border:'none',overflow:'hidden'}} scrolling="no"  allowTransparency={true}></iframe>
          </div>;
  }
}


