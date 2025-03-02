// components/home/Navigation.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.8rem 2rem;
`;

const Logo = styled.div`
  font-family: 'Gliker', cursive;
  font-size: 1.8rem;
  font-weight: 700;
  
  a {
    color: #125202;
    text-decoration: none;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    
    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #333;
      left: 0;
      transition: all 0.3s;
      
      &:nth-child(1) {
        top: 0;
        transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
      }
      
      &:nth-child(2) {
        top: 9px;
        opacity: ${props => props.isOpen ? '0' : '1'};
      }
      
      &:nth-child(3) {
        top: 18px;
        transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
      }
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    max-height: ${props => props.isOpen ? '300px' : '0'};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  color: #125202;
  
  a {
    display: block;
    padding: 0.5rem;
  
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    
    &:hover {
      color: #0a6caa;
    }
  }
  
  @media (max-width: 768px) {
    margin: 0;
    
    a {
      padding: 1rem 2rem;
      border-bottom: 1px solid #eee;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  
  button {
    background:  #9EB697;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s;
    
    &:hover {
      background: #085888;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    border-bottom: 1px solid #eee;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handlers for Connexion and Inscription buttons
  const handleConnexion = () => {
    console.log('Connexion button clicked');
    // Add your logic here (e.g., opening a login modal or redirecting)
  };

  const handleInscription = () => {
    console.log('Inscription button clicked');
    // Add your logic here (e.g., opening a signup modal or redirecting)
  };
  
  return (
    <NavContainer>
      <NavInner>
        <Logo>
          <Link to="/">ArtTrip</Link>
        </Logo>
        
        <MenuToggle isOpen={isMenuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavItem>
            <Link to="/presentation">Qui sommes-nous ?</Link>
          </NavItem>
          <NavItem>
            <Link to="/catalogue">Catalogue</Link>
          </NavItem>
          <NavItem>
            <Link to="/nos_auteurs">Nos Auteur.e.s</Link>
          </NavItem>
          <NavItem>
            <Link to="/collaborateurs">Nos collaborateurs</Link>
          </NavItem>
          <NavItem>
            <Link to="/galerie">Galerie Itinérante</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavLinks>
        
        <NavActions>
          <button onClick={handleConnexion}>Connexion</button>
          <button onClick={handleInscription}>Inscription</button>
        </NavActions>
      </NavInner>
    </NavContainer> 
  );
};

export default Navbar;
