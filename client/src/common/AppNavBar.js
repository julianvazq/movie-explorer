import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { watchlistState } from '../features/movies/slices/watchlistSlice';
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
import { CustomBadge } from '../styles/styled-components';

const CustomNavBar = styled(Navbar)`
  margin-bottom: 0 !important;
`;

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { watchlist } = useSelector(watchlistState);

  const toogle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <CustomNavBar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand tag={RRNavLink} to='/'>
            ME
          </NavbarBrand>
          <NavbarToggler onClick={toogle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
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
                  Watchlist<CustomBadge>{watchlist.length}</CustomBadge>
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
      </CustomNavBar> */}
    </div>
  );
};

export default AppNavbar;
