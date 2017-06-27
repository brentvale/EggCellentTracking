import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import * as UserActions from '../../actions/user_actions';
import BatchForm from './batch_form';
import { getAllChickens, getCurrentUser } from '../../reducers/selectors'

const mapStateToProps = state => ({
	currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  createBatch: batch => dispatch(BatchActions.createBatch(batch)),
	requestCurrentUser: () => dispatch(UserActions.requestCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BatchForm);