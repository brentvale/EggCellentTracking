import React from 'react';
import ChickenListItem from './chicken_list_item';
import ChickenForm from './chicken_form';


class ChickenList extends React.Component {
	componentDidMount(){
		this.props.requestChickens()
	}
	
	render(){
		const {chickens} = this.props;
		
	  const listItems = chickens.map((chicken, idx) => (
	      <ChickenListItem key={idx} chicken={chicken}/>
	  ));

	  return (
	    <div>
	      <ChickenForm />
	      <ul className='list-items'>
	          {listItems}
	      </ul>
	    </div>
	  );
	}
} 

export default ChickenList;