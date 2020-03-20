import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import styled from 'styled-components';

const CustomNavBar = styled(Navbar)`
  margin-bottom: 0 !important;
`;

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => setIsOpen(!isOpen);

  return (
    <div>
      <CustomNavBar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand tag={RRNavLink} to='/'>
            ME
          </NavbarBrand>
          <NavbarToggler onClick={toogle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </NavItem>{' '}
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  to='/watchlist'
                  exact
                  activeClassName='active'
                >
                  Watchlist
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/julianvazq/movie-explorer'>
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </CustomNavBar>
    </div>
  );
};

export default AppNavbar;
