import React from 'react';

class ChickenThumbnailShow extends React.Component{
  constructor(){
    super();
  }
	
  render() {
    const {chicken, eggsSelectedTotal} = this.props;
    const { chicken_name, id, egg_description } = chicken;
		
		const eggsDisplayList = [];
		
		for(let i = 0; i < eggsSelectedTotal; i++){
			eggsDisplayList.push(<div key={i} className="egg-marker"></div>);
		}
		
    return (
      <div id={chicken_name} 
					 data-chicken-id={id} 
					 style={{position: "relative", height: "140px", padding: "30px 15px 15px 15px", textAlign: "center"}}
					 className="col-xs-6 chicken-select-list-item-container"> 
					<div className="center-block chicken-select-list-item box-with-shadow box-with-shadow-unpadded hand-on-hover">
						<div style={{display:"inline-block", verticalAlign: "top"}}>
						<img src={chicken.thumbnail_photo} style={{height:"80px", display:"inline"}}/>
						</div>
					
						<div style={{display:"inline-block", paddingLeft: "10px", paddingTop: "10px", position:"relative", maxWidth:"150px", verticalAlign:"top"}}>
		          <h6>{chicken_name}</h6>
							<p style={{display:"block", fontSize: "0.8em"}}>{egg_description}</p>
							{eggsDisplayList}
						</div>
					</div>
					
      </div>
    )
  }
};

export default ChickenThumbnailShow;