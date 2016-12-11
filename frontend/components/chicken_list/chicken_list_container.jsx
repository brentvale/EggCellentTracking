import { connect } from 'react-redux';
import * as ChickenActions from '../../actions/chicken_actions';
import { getAllChickens } from '../../reducers/selectors';
import ChickenList from './chicken_list';

const mapStateToProps = state => ({
  chickens: getAllChickens(state)
});

const mapDispatchToProps = dispatch => ({
  receiveChicken: (chicken) => dispatch(ChickenActions.receiveChicken(chicken))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChickenList);