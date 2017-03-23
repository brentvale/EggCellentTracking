import React from 'react';
import { withRouter } from 'react-router';

class BatchShow extends React.Component {
	  constructor(){
	    super();
      this.state = {
		  	
      };
			this.parseEggCoordinates = this.parseEggCoordinates.bind(this);
	  }
		
		componentDidMount(){
			this.props.fetchSingleBatch(this.props.params.batch_id);
		}
	
    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }
		
		parseEggCoordinates(arrayOfSeparateCoordinates){

		}
		
    render () {
			const { chickens, batch } = this.props;
			
			const eggCoords = JSON.parse(batch.egg_coordinates);
			
      return (
        <div>
					BATCH SHOW
				</div>
      );
    }
}
  
export default withRouter(BatchShow);