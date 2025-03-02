// components/home/InstagramFeed.jsx
import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.8rem;
    color: #e1306c;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 1rem;
`;

const InstagramLink = styled.a`
  color: #0a6caa;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PhotoItem = styled.a`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%; /* Create 1:1 aspect ratio */
  display: block;
  
  &:hover {
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 1.5rem;
  z-index: 1;
`;

const InstagramFeed = () => {
  // This would typically come from an Instagram API
  const photos = [
    { id: 1, url: '/images/instagram1.jpg', link: 'https://instagram.com/' },
    { id: 2, url: '/images/instagram2.jpg', link: 'https://instagram.com/' },
    { id: 3, url: '/images/instagram3.jpg', link: 'https://instagram.com/' },
    { id: 4, url: '/images/instagram4.jpg', link: 'https://instagram.com/' },
    { id: 5, url: '/images/instagram5.jpg', link: 'https://instagram.com/' },
    { id: 6, url: '/images/instagram6.jpg', link: 'https://instagram.com/' }
  ];
  
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <FaInstagram />
          Follow Our Adventures
        </SectionTitle>
        <SectionDescription>
          Get daily travel inspiration by following us on Instagram
        </SectionDescription>
        <InstagramLink href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          @travelwebsite
        </InstagramLink>
      </SectionHeader>
      
      <PhotoGrid>
        {photos.map(photo => (
          <PhotoItem key={photo.id} href={photo.link} target="_blank" rel="noopener noreferrer">
            <img src={photo.url} alt="Instagram post" />
            <PhotoOverlay className="overlay">
              <FaInstagram />
            </PhotoOverlay>
          </PhotoItem>
        ))}
      </PhotoGrid>
    </Section>
  );
};

export default InstagramFeed;
