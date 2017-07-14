import * as React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';

export interface Props {
  checked?: boolean;
  toggleFavorite():void;
}

export interface State {

}

export default class FavoriteCheckbox extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
     checked: false
  }

  handleToggle = () => {
    const {toggleFavorite} = this.props;
    toggleFavorite();
  }
  
  render(){
    const {checked} = this.props;
    const icon = checked ? <ActionFavorite color={"red"} /> : <ActionFavoriteBorder color={"red"} />;
                

    return  <IconButton style={{float: 'right'}} onTouchTap={this.handleToggle}>{icon}</IconButton>;
  }
}