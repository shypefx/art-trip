// components/home/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const HeroSection = styled.section`
  position: relative;
  height: 85vh;
  min-height: 600px;
  max-height: 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECEDE8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 2rem;
  margin-top: 150px;
  @media (max-width: 768px) {
    height: 70vh;
    min-height: 500px;
    padding: 0 1.5rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto 2rem;
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background-color: #0a6caa;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: #085990;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const ScrollPrompt = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const ScrollText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
`;

const ChevronDown = styled.div`
  width: 20px;
  height: 12px;
  margin: 0 auto;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: white;
  }
  
  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }
  
  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
  
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };
  
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Discover Your Next Adventure</HeroTitle>
        <HeroSubtitle>
          Explore incredible destinations around the world with our expert travel guides and tips
        </HeroSubtitle>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <ExploreButton to="/destinations">Explore Destinations</ExploreButton>
      </HeroContent>
      
      <ScrollPrompt onClick={scrollToContent}>
        <ScrollText>Scroll Down</ScrollText>
        <ChevronDown />
      </ScrollPrompt>
    </HeroSection>
  );
};

export default Hero;
