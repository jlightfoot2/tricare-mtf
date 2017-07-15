import * as React from 'react';
//import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
export interface Props {
  setPage: (pageIdx: number) => void;
  page: number;
  lastPage: number;
}

export interface State {
  
}

export default class CommandsPagination extends React.Component<Props, State>{

  onShowMore = (event) => {
    const {page,setPage} = this.props;
    setPage(page + 1);
  }

  onShowLess = (event) => {
    const {page,setPage} = this.props;
    setPage(page - 1);
  }

  onShowFirst = (event) => {
    this.props.setPage(0);
  }

  onShowLast = (event) => {
    const {lastPage,setPage} = this.props;
    setPage(lastPage - 1);
  }

  render(){
    const {page, lastPage} = this.props;

        return <div>
           <FlatButton disabled={!(page > 0)} icon={<ExpandLessIcon />} label={'First'} onTouchTap={this.onShowFirst} />
           <FlatButton disabled={!(page > 0)} icon={<ExpandLessIcon />} label={'Prev'} onTouchTap={this.onShowLess} />
           <FlatButton disabled={!(page < lastPage - 1)} icon={<ExpandMoreIcon />} label={'Next'} onTouchTap={this.onShowMore} />
           <FlatButton disabled={!(page < lastPage - 1)} icon={<ExpandMoreIcon />} label={'Last'} onTouchTap={this.onShowLast} />
        </div>;
  }
}