import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class CustomNav extends React.Component {
	
	componentDidMount(){
		this.props.requestChickens();
	}
	
	render(){
	  const {chickens} = this.props;
		
	  const listItems = chickens.map((chicken, idx) => (
			<LinkContainer key={idx+1} to={"/chickens/" + chicken.chicken_name}>
	      <MenuItem>{chicken.chicken_name}</MenuItem>
			</LinkContainer>
	  ));
  
	  return(
	    <Navbar inverse collapseOnSelect style={{borderRadius: "0px", marginBottom: "0px"}}>
	      <Navbar.Header>
	        <Navbar.Brand>
	          <a href="/">Egg-cellent Tracker!</a>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	      </Navbar.Header>
    
	      <Navbar.Collapse>
	        <Nav>
	          <NavDropdown title="Producers" id="basic-nav-dropdown">
							<LinkContainer key={1} to="/chickens">
								<MenuItem>ALL CHICKENS</MenuItem>
							</LinkContainer>
	            {listItems}
	          </NavDropdown>
	        </Nav>
    
	        <Nav pullRight>
						<LinkContainer to="/createBatch">
		          <NavItem eventKey={1} >
								New Eggs!
							</NavItem>
						</LinkContainer>
	        </Nav>
	      </Navbar.Collapse>
	    </Navbar>
	  );
	}
}

export default CustomNav;