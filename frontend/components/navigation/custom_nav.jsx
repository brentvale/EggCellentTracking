import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const CustomNav = ({ chickens }) => {
  
  const listItems = chickens.map((chicken, idx) => (
      <MenuItem key={idx} href={"#/chickens/" + chicken.chicken_name}>{chicken.chicken_name}</MenuItem>
  ));
  
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#/eggs">Egg-cellent Tracker!</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Producers" id="basic-nav-dropdown">
            {listItems}
          </NavDropdown>
        </Nav>
    
        <Nav pullRight>
          <NavItem eventKey={1} href="#">New Eggs!</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) 
}

export default CustomNav;