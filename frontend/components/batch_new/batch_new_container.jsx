import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import BatchForm from './batch_form';
import { getAllChickens } from '../../reducers/selectors'

const mapDispatchToProps = dispatch => ({
  createBatch: batch => dispatch(BatchActions.createBatch(batch))
});

export default connect(
  null,
  mapDispatchToProps
)(BatchForm);