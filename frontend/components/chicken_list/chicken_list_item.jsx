import React from 'react';

//COMPONENTS
import {Link} from 'react-router';
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
						<ChickenForm 	chicken={chicken} klass="col-xs-12" handleToggleEditing={this.handleToggleEditing} editing={this.state.editing}/>
					</div>
	      </div>
	    );
		} else {
	    return (
	      <div className="col-xs-12 col-sm-6 col-lg-4" style={{height: "400px"}}>
					<Link to={`chickens/${chicken.chicken_name}`} className="no-decoration">
						<div className="center-block border-block box-with-shadow hand-on-hover" style={{textAlign:"center"}}>
							<img src={chicken.thumbnail_photo}/>
		          <h3>{chicken_name}</h3>
		          <p className="date-block">{arrival_date} - {departure_date}</p>
		          <p style={{textAlign:"left"}}>{biography}</p>
							<Button onClick={this.handleToggleEditing}>Edit {chicken.chicken_name}</Button>
						</div>
					</Link>
	      </div>
	    );
		}
    
  }
}

export default ChickenListItem;