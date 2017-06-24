import { connect } from 'react-redux';
import { getAllChickens } from '../../reducers/selectors';
import ChickenShow from './chicken_show';

const mapStateToProps = state => ({
  chickens: getAllChickens(state)
});

const mapDispatchToProps = dispatch => ({
  requestChickens: () => dispatch(ChickenActions.requestChickens())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChickenShow);