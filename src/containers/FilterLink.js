import { connect } from 'react-redux';
import { setSizeFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.sizeFilter
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setSizeFilter(ownProps.filter)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)
  

