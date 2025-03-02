// components/home/TravelTips.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlane, FaSuitcase, FaCamera, FaUtensils } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
    background-color: #ECEDE8;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TipIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: ${props => props.bgColor || '#0a6caa'};
  color: white;
  font-size: 3rem;
`;

const TipContent = styled.div`
  padding: 1.5rem;
`;

const TipTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const TipDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TipLink = styled(Link)`
  color: #0a6caa;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TravelTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Planning Your Trip',
      description: 'Learn how to create the perfect itinerary, book flights, and find the best accommodations.',
      icon: <FaPlane />,
      color: '#2E86C1',
      link: '/tips/planning'
    },
    {
      id: 2,
      title: 'Packing Essentials',
      description: 'Discover what to pack for any destination, including versatile clothing and electronic necessities.',
      icon: <FaSuitcase />,
      color: '#E67E22',
      link: '/tips/packing'
    },
    {
      id: 3,
      title: 'Photography Tips',
      description: 'Capture stunning travel photos with these expert techniques and best camera settings.',
      icon: <FaCamera />,
      color: '#16A085',
      link: '/tips/photography'
    },
    {
      id: 4,
      title: 'Food Recommendations',
      description: 'Find authentic local cuisine and learn how to eat like a local no matter where you go.',
      icon: <FaUtensils />,
      color: '#8E44AD',
      link: '/tips/food'
    }
  ];
  
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>Travel Smart</SectionTitle>
          <SectionDescription>
            Expert tips and advice to help you make the most of your journeys
          </SectionDescription>
        </SectionHeader>
        
        <TipsGrid>
          {tips.map(tip => (
            <TipCard key={tip.id}>
              <TipIcon bgColor={tip.color}>
                {tip.icon}
              </TipIcon>
              <TipContent>
                <TipTitle>{tip.title}</TipTitle>
                <TipDescription>{tip.description}</TipDescription>
                <TipLink to={tip.link}>
                  Read more
                </TipLink>
              </TipContent>
            </TipCard>
          ))}
        </TipsGrid>
      </SectionInner>
    </Section>
  );
};

export default TravelTips;
