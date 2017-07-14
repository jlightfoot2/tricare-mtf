import * as React from 'react';
import {AppPageInterface} from './AppTheme'
import {List, ListItem} from 'material-ui/List';
import ExternalLink from './ExternalLink';
import PhoneIcon from 'material-ui/svg-icons/action/open-in-browser';
import {ServiceInterface} from '../res/data/services';

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}

export interface Props {
  appPage: AppPageInterface;
  service: ServiceInterface;
  match:{url: string}
}

export interface State {

}

const makeLinkItem = (id,text,absoluteUrl) => {
  return <ListItem 
            key={id}
            containerElement={<ExternalLink absolutePath={absoluteUrl} />} 
            primaryText={text} 
            rightIcon={<PhoneIcon />} 
          />
}


export default class ResourcesPage extends React.Component<Props, State>{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Resources");
  }

  render(){
    const {service} = this.props;
    return <div style={{backgroundColor: 'white'}}>
            <List>
              {service.resources.map(res => makeLinkItem(res.id,res.title,res.url))}
            </List>
  
    </div>;
  }
}