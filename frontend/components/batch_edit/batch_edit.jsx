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
			const windowWidth = $(window).width();
			const pageX = event.pageX;
			const pageY = event.pageY;
			
			const {xPercent, yPercent} = this.calculatePercentageCoords(pageX, pageY, windowWidth);
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
		
		calculatePercentageCoords(x, y, windowWidth){
			const xPercent = (x - (windowWidth - (this.state.right + this.state.width))) / this.state.width;
			const yPercent = (y - this.state.top) / this.state.height;
			
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
			const selectLayerClass = (this.state.step === "egg") ? "absolute" : "absolute overlay-unselectable";
			
			
			//450 px used to adjust to correct spot...
		  const eggDivs = this.state.eggsAndCoords.map((obj, idx) => (
				<div 	key={idx} 
							className="absolute egg-marker"
							style={{right: this.state.right + ((1-obj.xPercent)*this.state.width) + "px", 
										 	top: this.state.top + (obj.yPercent*this.state.height) - 450 + "px"}}></div>
		  ));
			
      return (
        <div style={{padding: "20px", position: "relative"}}>
					<img className="absolute"
							 src={batch.photo_url} 
							 style={{height: this.state.height + "px", 
											 width: this.state.width + "px", 
											 top: this.state.top + "px", 
											 right: this.state.right  + "px"}}/>
					<div className={selectLayerClass}
							 onClick={(this.state.step === "egg") ? this.handleEggDrop : this.handleChickenSelect}
							 style={{height: this.state.height + "px", 
											 width: this.state.width + "px", 
											 top: this.state.top + "px", 
											 right: this.state.right  + "px"}}></div>
					<div className="chicken-select-list">
							 {chickensList} 
					</div>
					
					{eggDivs}
					
					<button className="btn btn-default" onClick={this.updateBatchWithCoordinates}>DONE</button>
				</div>
      );
    }
}
  
export default BatchEdit;