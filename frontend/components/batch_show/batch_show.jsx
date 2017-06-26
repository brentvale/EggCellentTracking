import React from 'react';
import { withRouter } from 'react-router';

import EggIcon from '../egg_list/egg_icon';
import ChickenThumbnailShow from '../chicken_show/chicken_thumbnail_show';

class BatchShow extends React.Component {
	  constructor(){
	    super();
      this.state = {
		  	height: 300,
				width: 400
      };
			this.adjustImage = this.adjustImage.bind(this);
			this.eggCountFromEggCoordinates = this.eggCountFromEggCoordinates.bind(this);
			this.editImage = this.editImage.bind(this);
	  }
		
		adjustImage(){
			let newHeight, newWidth;
			if(this.state.height === 300){
				this.setState({height: 400, width: 300});
			} else {
				this.setState({height: 300, width: 400});
			}
		}
		
		componentDidMount(){
			this.props.fetchSingleBatch(this.props.params.batch_id);
			this.props.requestChickens();
		}
	
		editImage(){
			this.props.router.push(`/batch_edit/${this.props.params.batch_id}`);
		}
		
		eggCountFromEggCoordinates(eggCoords){
			let chickenEggCountHash = {};

			for(let i = 0; i < eggCoords.length; i ++){
				if(typeof chickenEggCountHash[eggCoords[i].chickenId] === "undefined"){
					chickenEggCountHash[eggCoords[i].chickenId] = 1;
				} else {
					chickenEggCountHash[eggCoords[i].chickenId] += 1;
				}
			}
			
			return chickenEggCountHash;
		}
		
    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }
		
    render () {
			const { chickenHash, batch, chickens } = this.props;
			
			let eggDivs = [];
			let chickensList = [];
			if(typeof batch.egg_coordinates !== "undefined"){
				const eggCoords = JSON.parse(batch.egg_coordinates);
				let that = this;
			  eggDivs = eggCoords.map((obj, idx) => (
					<EggIcon egg={obj} key={idx} height={that.state.height} width={that.state.width} />
			  ));
				
				let chickenEggCountHash = this.eggCountFromEggCoordinates(eggCoords);
				
				chickensList = chickens.map((chicken, idx) => {
						if(typeof chickenEggCountHash[chicken.id] !== "undefined"){
							return <ChickenThumbnailShow chicken={chicken} eggsSelectedTotal={chickenEggCountHash[chicken.id]} key={chicken.id} />;
						}
					}
				);
			}
      return (
        <div>
					<h2 style={{textAlign:"center"}}>Total Eggs: {eggDivs.length}</h2>
					<div className="col-xs-12 col-md-6">
						<div className="center-block" style={{width: this.state.width, height: this.state.height, position:"relative"}}>
							<img src={batch.large_photo} 
									 style={{height: this.state.height + "px", 
												   width: this.state.width + "px"}}/>
							{ eggDivs }
						</div>
						<div style={{textAlign:"center", marginTop: "30px", marginBottom: "30px"}}>
							<button className="btn btn-default" style={{marginRight: "20px"}} onClick={this.adjustImage}>Adjust Image</button>
							<button className="btn btn-default" style={{marginLeft: "20px"}} onClick={this.editImage}>Edit Egg Placement</button>
						</div>
					</div>
					<div className="col-xs-12 col-md-6">
						<div className="col-xs-12" style={{textAlign:"center"}}>
							{chickensList} 
						</div>
					</div>
				</div>
      );
    }
}
  
export default withRouter(BatchShow);