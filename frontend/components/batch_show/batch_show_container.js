import { connect } from 'react-redux';
import * as BatchActions from '../../actions/batch_actions';
import * as ChickenActions from '../../actions/chicken_actions';
import { getBatchById, getAllChickens, parseEggCoordinates } from '../../reducers/selectors';
import BatchShow from './batch_show';

const mapStateToProps = (state, { params }) => ({
  batch: getBatchById(state, parseInt(params.batch_id)),
	chickenHash: state.chickens,
	chickens: getAllChickens(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSingleBatch: (id) => dispatch(BatchActions.fetchSingleBatch(id)),
	requestChickens: () => dispatch(ChickenActions.requestChickens())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BatchShow);