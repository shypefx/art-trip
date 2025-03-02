// components/home/PopularDestinations.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeaderLeft = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 0.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const SliderControls = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
`;

const SliderButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.disabled ? '#eee' : 'white'};
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.disabled ? '#999' : '#333'};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.disabled ? '#eee' : '#f5f5f5'};
    border-color: ${props => props.disabled ? '#ddd' : '#ccc'};
  }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => -100 * props.activeIndex}%);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 500px;
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  opacity: 0.9;
`;

const SlideButton = styled(Link)`
  display: inline-block;
  background-color: #fff;

  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background-color: #0a6caa;
    color: white;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const SliderDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#0a6caa' : '#ccc'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const PopularDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const destinations = [
    {
      id: 1,
      title: 'Paris, France',
      description: 'Discover the charm and beauty of the City of Lights. Explore iconic landmarks, world-class museums, and charming neighborhoods.',
      image: '/images/paris-large.jpg',
      slug: 'paris'
    },
    {
      id: 2,
      title: 'Kyoto, Japan',
      description: 'Immerse yourself in traditional Japanese culture with historic temples, bamboo groves, and beautiful gardens.',
      image: '/images/kyoto-large.jpg',
      slug: 'kyoto'
    },
    {
      id: 3,
      title: 'Santorini, Greece',
      description: 'Experience the breathtaking beauty of white-washed buildings and blue-domed churches overlooking the Aegean Sea.',
      image: '/images/santorini-large.jpg',
      slug: 'santorini'
    }
  ];
  
  const goToPrev = () => {
    setActiveIndex(prev => 
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex(prev => 
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <HeaderLeft>
            <SectionTitle>Popular Destinations</SectionTitle>
            <SectionDescription>Our most loved places around the world</SectionDescription>
          </HeaderLeft>
          
          <SliderControls>
            <SliderButton onClick={goToPrev} disabled={false}>
              <FaChevronLeft />
            </SliderButton>
            <SliderButton onClick={goToNext} disabled={false}>
              <FaChevronRight />
            </SliderButton>
          </SliderControls>
        </SectionHeader>
        
        <SliderContainer>
          <Slider activeIndex={activeIndex}>
            {destinations.map(destination => (
              <Slide key={destination.id}>
                <SlideImage image={destination.image} />
                <SlideOverlay>
                  <SlideTitle>{destination.title}</SlideTitle>
                  <SlideDescription>{destination.description}</SlideDescription>
                  <SlideButton to={`/destinations/${destination.slug}`}>
                    Explore more
                  </SlideButton>
                </SlideOverlay>
              </Slide>
            ))}
          </Slider>
          
          <SliderDots>
            {destinations.map((_, index) => (
              <SliderDot 
                key={index}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </SliderDots>
        </SliderContainer>
      </SectionInner>
    </Section>
  );
};

export default PopularDestinations;
