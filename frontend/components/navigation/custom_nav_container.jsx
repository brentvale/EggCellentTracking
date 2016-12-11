import { connect } from 'react-redux';

import { getAllChickens } from '../../reducers/selectors';
import CustomNav from './custom_nav';


const mapStateToProps = state => ({
  chickens: getAllChickens(state)
});

export default connect(
  mapStateToProps,
  null
)(CustomNav);