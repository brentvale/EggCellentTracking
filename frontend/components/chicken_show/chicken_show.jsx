import React from 'react';

class ChickenShow extends React.Component{
  constructor(){
    super();
    this.chickenFromProps = this.chickenFromProps.bind(this);
  }
  
  chickenFromProps() {
    const targetChickenName = this.props.params.chicken_name;
    for(let i = 0; i < this.props.chickens.length; i++){			
      if(this.props.chickens[i].chicken_name === targetChickenName){
        return {chicken: this.props.chickens[i], photo_url: this.props.photo_urls[this.props.chickens[i].id]};
      }
    }
    //unable to find a chicken by name in this.props.params
    return false;
  }
  
  render() {
    const { chicken, photo_url } = this.chickenFromProps();

		if(typeof chicken === "undefined"){
			return <div>FETCHING CHICKENS</div>
		}
		
    const { chicken_name, id, arrival_date, departure_date, biography } = chicken;
		
		let altText = chicken_name + " Profile Image";
    return (
      <div id={chicken_name}>
          <p>chicken id: {id}</p>
          <p>chicken name: {chicken_name}</p>
          <p>{arrival_date} - {departure_date}</p>
          <p>biography: {biography}</p>
					<img 	src={photo_url} 
								alt={altText}
								style={{height: "600px"}}/>
      </div>
    );
  }
};

export default ChickenShow;