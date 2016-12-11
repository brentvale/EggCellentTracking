import { connect } from 'react-redux';
import * as EggActions from '../../actions/egg_actions';
import { getAllEggs } from '../../reducers/selectors';
import EggList from './egg_list';

const mapStateToProps = state => ({
  eggs: getAllEggs(state)
});

const mapDispatchToProps = dispatch => ({
  receiveEgg: (egg) => dispatch(EggActions.receiveEgg(egg)),
  removeEgg: (egg) => dispatch(EggActions.removeEgg(egg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EggList);