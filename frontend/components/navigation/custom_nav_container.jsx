import { connect } from 'react-redux';

import { getAllChickens, getCurrentUser } from '../../reducers/selectors';
import CustomNav from './custom_nav';
import * as ChickenActions from '../../actions/chicken_actions';
import * as UserActions from '../../actions/user_actions';



const mapStateToProps = state => ({
  chickens: getAllChickens(state),
	currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  requestChickens: () => dispatch(ChickenActions.requestChickens()),
	requestCurrentUser: () => dispatch(UserActions.requestCurrentUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomNav);