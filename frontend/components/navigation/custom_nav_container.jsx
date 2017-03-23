import { connect } from 'react-redux';

import { getAllChickens } from '../../reducers/selectors';
import CustomNav from './custom_nav';
import * as ChickenActions from '../../actions/chicken_actions';


const mapStateToProps = state => ({
  chickens: getAllChickens(state)
});

const mapDispatchToProps = dispatch => ({
  requestChickens: () => dispatch(ChickenActions.requestChickens())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNav);