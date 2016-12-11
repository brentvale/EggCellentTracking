import React from 'react';
import { uniqueId } from '../../util/idGenerator'

class ChickenForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chicken_name: "", 
        biography: "", 
        arrival_date: "", 
        departure_date: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
      event.preventDefault();
      const chicken = Object.assign({}, this.state, { id: uniqueId() });
      this.props.receiveChicken(chicken);
      this.setState({
        chicken_name: "", 
        biography: "", 
        arrival_date: "", 
        departure_date: ""
      });
    }

    linkState(key) {
      // here we use '[key]' to set the key to be the value of the 'key' variable,
      // as opposed to a string of 'key'
      return (event => this.setState({[key]: event.currentTarget.value}));
    }

    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Chicken Name
            <input onChange={this.linkState('chicken_name')} value={this.state.chicken_name}/><br/>
          </label>
          <label>Biography
            <input onChange={this.linkState('biography')} value={this.state.biography}/><br/>
          </label>
          <label>Arrival Date
            <input onChange={this.linkState('arrival_date')} value={this.state.arrival_date}/><br/>
          </label>
          <label>Departure Date
            <input onChange={this.linkState('departure_date')} value={this.state.departure_date}/><br/>
          </label>

          <input type="submit" value="Enter" />
        </form>
      );
    }
}
  
export default ChickenForm;