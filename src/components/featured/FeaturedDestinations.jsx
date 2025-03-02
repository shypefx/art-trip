// components/home/FeaturedDestinations.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// images
import parisImage from '../../images/street_art_paris.jpg.webp';
import bruxellesImage from '../../images/street_art_bruxelles.PNG';
import newYorkImage from '../../images/street_art_new_york.jpg';
import rioImage from '../../images/street_art_rio.jpeg';
import tokyoImage from '../../images/street_art_tokyo.jpeg';


const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ECEDE8;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DestinationCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  background: white;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
    transition: 0.3s ease;
  }
`;

const DestinationImage = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #6E8C64;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
`;

const DestinationContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const DestinationTitle = styled(Link)`
  display: inline-block;
  margin-top: -30px;
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: white;
  border: 2px solid #0a6caa;
  color: #0a6caa;
  border-radius: 20px;
  text-decoration: none;
  position: relative;

  &:hover {
    background-color: #0a6caa;
    color: white;
    transition: 0.3s ease;
  }
`;

const FeaturedDestinations = () => {
  const destinations = [
  {
    id: 1,
    title: 'Paris',
    image: parisImage,
    description: 'Explore the charm and history of London.',
    slug: 'paris'
  },
  {
    id: 2,
    title: 'Bruxelles',
    image: bruxellesImage,
    description: 'Dive into the rich history of the Eternal City.',
    slug: 'bruxelles'
  },
  {
    id: 3,
    title: 'New York',
    image: newYorkImage,
    description: 'Immerse yourself in colorful markets and rich culture.',
    slug: 'new-york'
  },
  {
    id: 4,
    title: 'Rio de Janeiro',
    image: rioImage,
    description: 'Ride the iconic trams of Portugal’s vibrant capital.',
    slug: 'rio'
  },
  {
    id: 5,
    title: 'Tokyo',
    image: tokyoImage,
    description: 'Ride the iconic trams of Portugal’s vibrant capital.',
    slug: 'tokyo'
  },
];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Quelle sera votre prochaine destination ?</SectionTitle>
        <SectionDescription>Planifiez vos prochaines vacances !</SectionDescription>
      </SectionHeader>
      <DestinationsGrid>
        {destinations.map(destination => (
          <DestinationCard key={destination.id}>
            <DestinationImage image={destination.image}>
              <Badge>Ville</Badge>
            </DestinationImage>
            <DestinationContent>
              <DestinationTitle to={`/destinations/${destination.slug}`}>
                {destination.title}
              </DestinationTitle>
            </DestinationContent>
          </DestinationCard>
        ))}
      </DestinationsGrid>
    </Section>
  );
};

export default FeaturedDestinations;
