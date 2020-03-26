import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { watchlistState } from '../features/movies/slices/watchlistSlice';
import { FaGithub, FaFilm } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => props.theme.gray};
  color: ${props => props.theme.light};
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 12;
`;

const NavInnerContainer = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.25rem;
  height: 37px;
  width: 42px;
  background: ${props => props.theme.dark};
  color: ${props => props.theme.gold};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style: none;
  margin-bottom: 0;

  a {
    text-decoration-color: ${props => props.theme.gold};
  }
`;

const NavItem = styled.li`
  padding: 0.75rem;
  color: ${props => props.theme.light};
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
`;

const CustomBadge = styled(Badge)`
  color: ${props => props.theme.light};
  background: hsl(46, 80%, 40%);
  vertical-align: baseline;
  padding-right: 0.6em;
  padding-left: 0.55em;
  margin-left: 0.3rem;
  font-size: 0.75rem;
  height: 19px;
  width: 20px;
  line-height: 1;
  position: absolute;
  top: 16px;
  right: -7px;
`;

const GithubIcon = styled(FaGithub)`
  color: ${props => props.theme.light};
  font-size: 1.25rem;
  margin-left: 2rem;
`;

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { watchlist } = useSelector(watchlistState);

  return (
    <Nav>
      <NavInnerContainer>
        <Link to='/'>
          <LogoContainer>
            <GiPopcorn />
            {/* <FaFilm /> */}
          </LogoContainer>
        </Link>
        <NavList>
          <Link to='/'>
            <NavItem>Home</NavItem>
          </Link>
          <Link to='/watchlist'>
            <NavItem>
              Watchlist<CustomBadge pill>{watchlist.length}</CustomBadge>
            </NavItem>
          </Link>
          <NavItem>
            <a
              href='https://github.com/julianvazq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </a>
          </NavItem>
        </NavList>
      </NavInnerContainer>
    </Nav>
  );
};

export default AppNavbar;
