import React from 'react';
import {Button} from 'react-bootstrap';
import ChickenForm from './chicken_form';

class ChickenListItem extends React.Component{
	constructor(){
		super();
		this.state = {
			editing: false
		}
		this.handleToggleEditing = this.handleToggleEditing.bind(this);
	}
	
	handleToggleEditing(e){
		if(e){
			e.preventDefault();
		}
		this.setState({editing: !this.state.editing});
	}
	
  render() {
    const { chicken } = this.props;
    const { id, chicken_name, biography, arrival_date, departure_date, thumbnail_photo } = chicken;
		// <img src={chicken.thumbnail_photo} />
		if(this.state.editing){
	    return (
	      <div className="col-xs-12 col-sm-6 col-lg-4">
					<div className="center-block border-block box-with-shadow">
						<Button onClick={this.handleToggleEditing}>X</Button>
						<ChickenForm 	chicken={chicken} klass="col-xs-12" handleToggleEditing={this.handleToggleEditing}/>
					</div>
	      </div>
	    );
		} else {
	    return (
	      <div className="col-xs-12 col-sm-6 col-lg-4" style={{height: "400px"}}>
					<div className="center-block border-block box-with-shadow">
						<img src={chicken.thumbnail_photo}/>
	          <p>chicken name: {chicken_name}</p>
	          <p>{arrival_date} - {departure_date}</p>
	          <p>biography: {biography}</p>
						<Button onClick={this.handleToggleEditing}>Edit {chicken.chicken_name}</Button>
					</div>
	      </div>
	    );
		}
    
  }
}

export default ChickenListItem;