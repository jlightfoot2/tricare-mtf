import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import FirstPageIcon from 'material-ui/svg-icons/navigation/first-page';
import LastPageIcon from 'material-ui/svg-icons/navigation/last-page';
import NextPageIcon from 'material-ui/svg-icons/navigation/chevron-right';
import PrevPageIcon from 'material-ui/svg-icons/navigation/chevron-left';
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
           <IconButton disabled={!(page > 0)} onTouchTap={this.onShowFirst}>
             <FirstPageIcon />
           </IconButton>
           <IconButton disabled={!(page > 0)} onTouchTap={this.onShowLess}>
             <PrevPageIcon />
           </IconButton>
           <IconButton disabled={!(page < lastPage - 1)} label={'Next'} onTouchTap={this.onShowMore}>
             <NextPageIcon />
           </IconButton>
           <IconButton disabled={!(page < lastPage - 1)}  onTouchTap={this.onShowLast}>
             <LastPageIcon />
           </IconButton>
        </div>;
  }
}