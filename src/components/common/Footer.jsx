// components/home/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #125202;
  color: #fff;
  padding-top: 4rem;
`;

const FooterMain = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const FooterText = styled.p`
  color: #bbb;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333;
  color: white;
  border-radius: 50%;
  transition: all 0.3s;
  
  &:hover {
    background-color: #0a6caa;
    transform: translateY(-3px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #bbb;
  font-size: 0.9rem;
  
  svg {
    margin-right: 0.8rem;
    color: #0a6caa;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  position: relative;
  padding-bottom: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #0a6caa;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 0.9rem;
    
    &:hover {
      color: #0a6caa;
    }
  }
`;

const FooterBottom = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem 2rem;
`;

const FooterBottomInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #999;
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #999;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      color: #0a6caa;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <FooterColumn>
          <Logo>ArtTrip</Logo>
          <FooterText>
            Explore the world with our expert travel advice, destination guides, and vacation planning resources. We help you discover the best places to visit and create unforgettable experiences.
          </FooterText>
          <SocialIcons>
            <SocialIcon href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </SocialIcon>
            <SocialIcon href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>123 Travel Street, Adventure City, 10001</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <span>info@travelwebsite.com</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <span>+1 (123) 456-7890</span>
          </ContactItem>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Destinations</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/destinations/paris">Paris</Link></FooterLink>
            <FooterLink><Link to="/destinations/bruxelles">Bruxelles</Link></FooterLink>
            <FooterLink><Link to="/destinations/new-york">New York</Link></FooterLink>
            <FooterLink><Link to="/destinations/tokyo">Tokyo</Link></FooterLink>
            <FooterLink><Link to="/destinations/rio">Rio de Janeiro</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Liens</FooterTitle>
          <FooterLinks>
            <FooterLink><Link to="/presentation">Qui sommes-nous ?</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact</Link></FooterLink>
            <FooterLink><Link to="/catalogue">Catalogue</Link></FooterLink>
            <FooterLink><Link to="/nos_auteurs">Nos Auteur.e.s</Link></FooterLink>
            <FooterLink><Link to="/collaborateurs">Nos collaborateurs</Link></FooterLink>
            <FooterLink><Link to="/gallerie">Galerie Itinérante</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterMain>
      
      <FooterBottom>
        <FooterBottomInner>
          <Copyright>
            &copy; {new Date().getFullYear()} LonelyPlanet. All rights reserved.
          </Copyright>
          
          <FooterBottomLinks>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </FooterBottomLinks>
        </FooterBottomInner>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
