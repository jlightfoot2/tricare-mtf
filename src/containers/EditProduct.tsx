import {connect} from 'react-redux';
import EditProductComponent from '../components/EditProduct'
import {makeProduct, ProductInterface} from '../res/data/products';
import {saveProduct} from '../actions';
import {withRouter} from 'react-router-dom';
const resolveProduct = (state,ownProps) => {
   return typeof ownProps['product'] !== 'undefined' ? ownProps['product'] : makeProduct(0,'',0);
}


const stateToProps = (state,ownProps) => {
  return {
    product:  resolveProduct(state,ownProps),
    realtime: ownProps.realtime
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    editProduct: (product:  ProductInterface) => {
      dispatch(saveProduct(product));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(EditProductComponent));