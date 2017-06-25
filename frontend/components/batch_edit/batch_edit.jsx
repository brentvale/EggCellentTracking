// coordinates for chicken egg placement held in array of this.state.eggsAndCoords as:
// chickenId => default value -1 for unknown/un-selected
// {chickenId: -1, xPercent: float, yPercent: float};
import React from 'react';
import { withRouter } from 'react-router';

import ChickenThumbnailSelect from '../chicken_show/chicken_thumbnail_select'

class BatchEdit extends React.Component {
	  constructor(){
	    super();
      this.state = {
		  	height: 300,
				width: 400,
				top: 80,
				right: 10,
				step: "egg", //toggle step "egg"/"chicken" for "egg":selecting egg or "chicken": selecting associated chicken
				eggsAndCoords: []
      };
			this.handleEggDrop = this.handleEggDrop.bind(this);
			this.handleChickenSelect = this.handleChickenSelect.bind(this);
			this.updateBatchWithCoordinates = this.updateBatchWithCoordinates.bind(this);
			this.adjustImage = this.adjustImage.bind(this);
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
		}
		
		handleChickenSelect(event){
			event.preventDefault();
			const chickenId = $(event.currentTarget).data("chicken-id");
			let newEggsAndCoords = this.state.eggsAndCoords;
			
			newEggsAndCoords[newEggsAndCoords.length-1].chickenId = chickenId;
			
			this.setState({	step: "egg",
											eggsAndCoords: newEggsAndCoords});
		}
		
		handleEggDrop(event){
			event.preventDefault();
			
			var offset = $(event.currentTarget).offset();
			//
			const elementXpos = event.pageX - offset.left;
			const elementYpos = event.pageY - offset.top;
			
			const {xPercent, yPercent} = this.calculatePercentageCoords(elementXpos, elementYpos);
			
			const newEggSpot = {chickenId: -1, xPercent: xPercent, yPercent: yPercent};
			
			let newEggsAndCoords = this.state.eggsAndCoords;
			newEggsAndCoords.push(newEggSpot);
			this.setState({step: "chicken", eggsAndCoords: newEggsAndCoords});
		}
		
		calculateEggsSelectedTotal(chickenId){
			let count = 0;
			for(let i = 0; i < this.state.eggsAndCoords.length; i++){
				if(this.state.eggsAndCoords[i].chickenId === chickenId){
					count += 1;
				}
			}
			//confusing if egg immediately appears in unknown category
			//allow user to first select chicken before placing it in the 'unknown' category
			//only applicable for the 'unknown' category (where chickenId === -1)
			if(this.state.step === "chicken" && chickenId === -1){
				count -= 1;
			}
			return count;
		}
		
		calculatePercentageCoords(x,y){
			//this.state.height = 300
			//this.state.width = 400
			const xPercent = x/this.state.width;
			const yPercent = y/this.state.height;
			
			return {xPercent: xPercent, yPercent: yPercent}
		}

    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }

		updateBatchWithCoordinates(){
			this.props.updateBatch({eggsAndCoords: this.state.eggsAndCoords, id: this.props.batch.id})
				.then((data) => {
					this.props.router.push(`/batch/${data.batch.id}`)}
				);
		}
		
    render () {
			const { chickens, batch } = this.props;
			
		  const chickensList = chickens.map((chicken, idx) => (
		      <ChickenThumbnailSelect key={idx} 
																	chicken={chicken} 
																	handleChickenSelect={this.handleChickenSelect}
																	handleChickenSelectListenerOn={(this.state.step === "egg") ? false : true}
																	eggsSelectedTotal={this.calculateEggsSelectedTotal(chicken.id)}/>
		  ));
			
			chickensList.push(<ChickenThumbnailSelect key={chickens.length + 1} 
																	chicken={{id: -1, chicken_name: "unknown"}}
																	handleChickenSelect={this.handleChickenSelect}
																	handleChickenSelectListenerOn={(this.state.step === "egg") ? false : true}
																	eggsSelectedTotal={this.calculateEggsSelectedTotal(-1)}/>)
			
			//select layer is the div layer used to calculate clicks events
			const selectLayerClass = (this.state.step === "egg") ? "absolute overlay-unselectable" : "absolute overlay-unselectable";
			
			
			const mouseOffsetInPixels = 5;
		  const eggDivs = this.state.eggsAndCoords.map((obj, idx) => (
				<div 	key={idx} 
							className="absolute egg-marker"
							style={{left: (obj.xPercent*this.state.width) - mouseOffsetInPixels + "px", 
										 	top: (obj.yPercent*this.state.height) - mouseOffsetInPixels + "px"}}></div>
		  ));
			
			const totalEggsCounted = this.state.eggsAndCoords.length;
			
			let imageClickHandler = (this.state.step === "egg") ? this.handleEggDrop : () => {alert(`Select a chicken you think laid this egg or select unknown at the bottom of the list`)};
			
			let headingText = (this.state.step === "egg") ? <h2 className="left-heading">Tap/Click an egg</h2> : <h2 className="right-heading">Tap/Click the chicken that laid it</h2>;
			
      return (
        <div style={{padding: "20px", position: "relative"}}>
					{headingText}
					<div className="col-xs-12 col-md-6" style={{textAlign:"center", paddingTop:"40px", marginBottom: "50px"}}>
						<div className="center-block" style={{width: this.state.width, height: this.state.height, position:"relative"}}>
							
								<img className=""
										 onClick={imageClickHandler}
										 src={batch.thumbnail_photo} 
										 style={{height: this.state.height + "px", 
														 width: this.state.width + "px"}}/>
	
								{eggDivs}
							
						</div>
						<div style={{display: "block", marginTop: "50px"}}>
								 <button className="btn btn-default" style={{marginRight: "20px"}}onClick={this.updateBatchWithCoordinates}>DONE</button>
								 <button className="btn btn-default" style={{marginLeft: "20px"}}onClick={this.adjustImage}>Adjust Image</button>
						</div>
						
					</div>
					<div className="col-xs-12 col-md-6" style={{height:"400px", overflow: "scroll", marginTop:"20px", marginBottom: "100px", textAlign:"center"}}>
						<h4>Egg Count : {totalEggsCounted}</h4>
						
						<div className="col-xs-12" style={{textAlign:"center"}}>
								 {chickensList} 
						</div>
					
						
					</div>
				</div>
      );
    }
}
  
export default BatchEdit;