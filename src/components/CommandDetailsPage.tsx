import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import {AppPageInterface} from './AppTheme';
import {List, ListItem} from 'material-ui/List';
import NavigationIcon from 'material-ui/svg-icons/maps/navigation';
import PhoneCallIcon from 'material-ui/svg-icons/communication/call';
import FavoriteCheckbox from './FavoriteCheckBox';
import { Link } from 'react-router-dom';
import {socialIcons} from './commonStyles';
import ExternalLink from './ExternalLink';

import {titleStyles1,contentContainer1,PrimaryColor,greyContainer,whiteContainer} from './commonStyles';

const facebookImage = require('../res/images/ui/mtf-hospital-facebook.png');
const twitterImage = require('../res/images/ui/mtf-hospital-twitter.png');
const websiteImage = require('../res/images/ui/mtf-hospital-website.png');

export interface Props {
  hospital: CommandInterface;
  appPage: AppPageInterface;
  isFavorite: boolean;
  toggleFavorite: (hospital: CommandInterface,isFavorite:boolean) => void;
  sendMessage(message:string): void;
  navLink: string;
  phoneLink: string;
}

export interface State {

}

export default class CommandDetails extends React.Component<Props, State>{
  static MAX_WIDTH:number = 640;

  componentWillMount(){
    const {appPage} = this.props;
    appPage.setPageTitle("Command Details");
  }
  getContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = CommandDetails.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width) * 0.90;
  }

  handleSetToggle = () => {
    const {toggleFavorite,isFavorite,hospital,sendMessage} = this.props;
    return () => {
      const favMessage = isFavorite ? "Removed Favorite" : "Added Favorite";
      sendMessage(favMessage);
      toggleFavorite(hospital,isFavorite);
    }
  }

  render(){
    const {hospital,isFavorite,navLink,phoneLink} = this.props;
    const styles = {...contentContainer1,width: this.getContentWidth()};
    const titleStyles = {...titleStyles1,width: this.getContentWidth()};
    const hasTwitter = hospital.twitter.length > 0;
    const hasFacebook = hospital.facebook.length > 0;
    const hasWebsite = hospital.website.length > 0;
 
    return <div style={whiteContainer}>
              <div style={styles}>
                <div style={{width: '90%',margin: '0px auto 0px auto'}}>
                  <img style={{width: '100%'}} src={hospital.img} />
                </div>
              </div>
              <div style={{greyContainer}}>
                <FavoriteCheckbox toggleFavorite={this.handleSetToggle()} checked={isFavorite} />
                <div style={titleStyles as any}>{hospital.title}</div>
                
                <List>
                  <ListItem containerElement={<ExternalLink target="_system" absolutePath={navLink} />} leftIcon={<NavigationIcon color={PrimaryColor} />} primaryText={hospital.address} />
                  <ListItem containerElement={<ExternalLink target="_system" absolutePath={phoneLink} />} leftIcon={<PhoneCallIcon color={PrimaryColor} />} primaryText={hospital.phone} />
                </List>
                <div>

                  {hasTwitter && <Link to={'/commands/'+ hospital.id + '/twitter'}>
                    <img style={socialIcons} src={twitterImage} />
                  </Link>}


                  {hasFacebook && <ExternalLink absolutePath={hospital.facebook}>
                    <img style={socialIcons} src={facebookImage} />
                  </ExternalLink>}


                  {hasWebsite && <ExternalLink absolutePath={hospital.website}>
                    <img style={socialIcons} src={websiteImage} />
                  </ExternalLink>}
                </div>
              </div>
    </div>
  }
}

