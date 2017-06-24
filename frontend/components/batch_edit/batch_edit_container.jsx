import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import { getBatchById, getAllChickens, createEggsHashFromChickens } from '../../reducers/selectors';
import BatchEdit from './batch_edit';

const mapStateToProps = (state, { params }) => ({
  batch: getBatchById(state, parseInt(params.batch_id)),
	chickens: getAllChickens(state),
	eggs: createEggsHashFromChickens(state)
});

const mapDispatchToProps = dispatch => ({
	updateBatch: batch => dispatch(BatchActions.updateBatch(batch)),
	fetchSingleBatch: (id) => dispatch(BatchActions.fetchSingleBatch(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BatchEdit);