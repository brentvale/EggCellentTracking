import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import { getAllBatches } from '../../reducers/selectors';
import BatchList from './batch_list';

const mapStateToProps = state => ({
  batches: getAllBatches(state)
});

const mapDispatchToProps = dispatch => ({
	requestBatches: () => dispatch(BatchActions.requestBatches())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BatchList);