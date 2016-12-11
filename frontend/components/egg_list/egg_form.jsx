import React from 'react';
import { uniqueId } from '../../util/idGenerator'

class EggForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chicken_id: "",
        find_date: "new Date().getTime()"
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
      event.preventDefault();
      const egg = Object.assign({}, this.state, { id: uniqueId() });
      this.props.receiveEgg(egg);
      this.setState({
        chicken_id: ""
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
          <input onChange={this.linkState('chicken_id')} value={this.state.chicken_id}/><br/>
          <span>The chiken_id is: {this.state.chicken_id}</span>
          <input type="submit" value="Enter" />
        </form>
      );
    }
}
  

export default EggForm;