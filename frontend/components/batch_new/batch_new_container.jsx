import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import BatchForm from './batch_form';
import { getAllChickens } from '../../reducers/selectors'

const mapStateToProps = state => ({
	currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBatch: batch => dispatch(BatchActions.createBatch(batch))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BatchForm);