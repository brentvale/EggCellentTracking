import React from 'react';
import ChickenListItem from '../chicken_list/chicken_list_item';

class ChickenShow extends React.Component{
  constructor(){
    super();
    this.chickenFromProps = this.chickenFromProps.bind(this);
  }
  
	componentDidMount(){
		
	}
	
  chickenFromProps() {
    const targetChickenName = this.props.params.chicken_name;
    for(let i = 0; i < this.props.chickens.length; i++){			
      if(this.props.chickens[i].chicken_name === targetChickenName){
        return {chicken: this.props.chickens[i]};
      }
    }
    //unable to find a chicken by name in this.props.params
    return false;
  }
  
  render() {
    const { chicken } = this.chickenFromProps();

		if(typeof chicken === "undefined"){
			return <div>FETCHING CHICKENS</div>
		}
		
    return (
      <div >
				<ChickenListItem chicken={chicken}/>
      </div>
    );
  }
};

export default ChickenShow;