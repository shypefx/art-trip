// components/home/Navigation.jsx
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cart from "../../images/shopping-cart.png"
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

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
  
  img {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    color: #125202;

  }
`;

const CartIcon = styled(Link)`
  position: relative;
  color: #125202;
  font-size: 1.5rem;
  transition: all 0.3s;
  
  &:hover {
    color: #1a7a03;
    transform: scale(1.1);
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4d4d;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext); // Récupération de getTotalItems du contexte
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <CartIcon to="/cart">
            <FaShoppingCart />
              {getTotalItems() > 0 && <CartBadge>{getTotalItems()}</CartBadge>}
            </CartIcon>
        </NavActions>
      </NavInner>
    </NavContainer> 
  );
};

export default Navbar;
