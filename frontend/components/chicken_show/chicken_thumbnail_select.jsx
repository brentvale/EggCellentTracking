import React from 'react';

class ChickenThumbnailSelect extends React.Component{
  constructor(){
    super();
		this.alertUserToSelectEggFirst = this.alertUserToSelectEggFirst.bind(this);
  }
  
	alertUserToSelectEggFirst(){
		alert("Select an Egg First and then assign it to a chicken. \nTag eggs of unknown origin with the Question Mark Chicken. \nWhen you're done entering all eggs, click DONE");
	}
	
  render() {
    const {chicken, eggsSelectedTotal, photo_url} = this.props;
    const { chicken_name, id, egg_description } = chicken;
		
		const chickenImage = (id === -1) ? "" : <img src={photo_url} style={{height:"80px", display:"inline"}}/>;
		
		const onClickHandler = (this.props.handleChickenSelectListenerOn) ? this.props.handleChickenSelect : this.alertUserToSelectEggFirst;
		
		const eggsDisplayList = [];
		
		for(let i = 0; i < eggsSelectedTotal; i++){
			eggsDisplayList.push(<div key={i} className="egg-marker"></div>);
		}
		
    return (
      <div id={chicken_name} 
					 data-chicken-id={id} 
					 onClick={onClickHandler}
					 style={{position: "relative", height: "140px", padding: "15px"}}> 
					 
					<div style={{display:"inline-block", verticalAlign: "top"}}>
					 {chickenImage}
					</div>
					
					<div style={{display:"inline-block", padding: "10px", position:"relative", maxWidth:"150px", verticalAlign:"top"}}>
	          <h6>{chicken_name}</h6>
						<p style={{display:"block", fontSize: "0.8em"}}>{egg_description}</p>
						{eggsDisplayList}
					</div>
      </div>
    )
  }
};

export default ChickenThumbnailSelect;