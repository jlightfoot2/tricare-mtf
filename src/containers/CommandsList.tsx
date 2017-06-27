import {connect} from 'react-redux';
import CommandHospitalsComponent from '../components/CommandsList';
import {ProductInterface} from '../res/data/products';
import {addProductFavorites} from '../actions';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    hospitals: state.hospitalIds.map(hid => state.hospitals[hid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    addFavorite: (product: ProductInterface) => {
      dispatch(addProductFavorites(product.id));
    },
    
    itemClick: (product: ProductInterface) => {
        console.log('pushing ' + '/commands/' + product.id);
        console.log(ownProps);
        //Just a stub for now
        //TODO waiting for react-router-redux to be compatiable with react-redux v4
       
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(CommandHospitalsComponent));