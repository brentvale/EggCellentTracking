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
        return this.props.chickens[i];
      }
    }
    //unable to find a chicken by name in this.props.params
    return false;
  }
  
  render() {
    const chicken = this.chickenFromProps();
    const { chicken_name, id, arrival_date, departure_date, biography } = chicken;
    return (
      <div id={chicken_name}>
          <p>chicken id: {id}</p>
          <p>chicken name: {chicken_name}</p>
          <p>{arrival_date} - {departure_date}</p>
          <p>biography: {biography}</p>
      </div>
    );
  }
};

export default ChickenShow;