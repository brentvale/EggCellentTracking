import { connect } from 'react-redux';
import { getAllChickens } from '../../reducers/selectors';
import ChickenShow from './chicken_show';

const mapStateToProps = state => ({
  chickens: getAllChickens(state)
});

export default connect(
  mapStateToProps,
  null
)(ChickenShow);