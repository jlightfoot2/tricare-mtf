//<a class="twitter-timeline" href="https://twitter.com/ArmyMedicine">Tweets by ArmyMedicine</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
import * as React from 'react';

import {AppPageInterface} from './AppTheme';

export interface Props {
  appPage: AppPageInterface;
  link: string;
}

export interface State {
   showFeed: boolean;
}

export default class TwitterPage extends React.Component<Props, State>{
  constructor(props){
    super(props);
    this.state = {
      showFeed: false
    }
  }

  componentDidMount(){
    this.handleLoadTwitter();
  }

  componentWillReceiveProps(){
    this.handleLoadTwitter();
  }

  handleLoadTwitter = () => {
    if(typeof (window as any).twttr.widgets !== 'undefined'){
       (window as any).twttr.widgets.load()
    }
  }

  render(){
   const {appPage,link} = this.props;
   const maxWidth = 800;
   const width = appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width;
   const style = {
     width,
     margin: '0px auto 0px auto'
   };
    return <div>
              <div style={style}>
               <a style={{display: 'none'}} className="twitter-timeline" href={link}>Tweets by ArmyMedicine</a>
              </div>
          </div>;
  }
}


