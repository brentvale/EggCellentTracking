import React from 'react';
import ChickenListItem from './chicken_list_item';
import ChickenForm from './chicken_form';
import {Button} from 'react-bootstrap';

class ChickenList extends React.Component {
	constructor(){
		super();
		this.state = {
			formShowing: false
		}
		this.toggleChickenForm = this.toggleChickenForm.bind(this);
	}
	
	componentDidMount(){
		this.props.requestChickens()
	}
	
	toggleChickenForm(e){
		e.preventDefault();
		this.setState({formShowing: !this.state.formShowing});
	}
	
	render(){
		const {chickens} = this.props;
		
	  const listItems = chickens.map((chicken, idx) => (
	      <ChickenListItem key={idx} chicken={chicken}/>
	  ));

		let chickenForm, buttonToCreateOrClose;
		if(this.state.formShowing){
			chickenForm = <ChickenForm klass="col-xs-12 col-sm-6"/>;
			buttonToCreateOrClose = <Button onClick={this.toggleChickenForm}>Close Chicken Form</Button>
		} else {
			chickenForm = "";
			buttonToCreateOrClose = <Button onClick={this.toggleChickenForm}>New Chicken!</Button>
		}

	  return (
	    <div>
				<div className="col-xs-12" style={{marginBottom: "2em"}}>
					{ chickenForm }
					{ buttonToCreateOrClose }
				</div>
	      <div className="col-xs-12">
					{listItems}
				</div>
	    </div>
	  );
	}
} 

export default ChickenList;