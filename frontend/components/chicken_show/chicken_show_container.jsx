import { connect } from 'react-redux';
import { getAllChickens, getAllPhotoUrls } from '../../reducers/selectors';
import ChickenShow from './chicken_show';

const mapStateToProps = state => ({
  chickens: getAllChickens(state),
	photo_urls: getAllPhotoUrls(state)
});

export default connect(
  mapStateToProps,
  null
)(ChickenShow);