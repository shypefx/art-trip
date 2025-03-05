// App.jsx or components/home/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/common/Hero';
import FeaturedDestinations from '../components/featured/FeaturedDestinations';
import TravelCategories from '../components/travel/TravelCategories';
import FeaturedArticles from '../components/featured/FeaturedArticles';
import TravelTips from '../components/travel/TravelTips';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Newsletter from '../components/home/Newsletter';
import InstagramFeed from '../components/home/InstagramFeed';
import Footer from '../components/common/Footer';
import AnimatedText from '../components/home/AnimatedText';

// Global styles
const GlobalStyle = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

const HomePage = () => {
  return (
    <GlobalStyle>
      <Hero />
      <AnimatedText />
      <FeaturedDestinations />
      <TravelCategories />
      <TestimonialsSection />
      <InstagramFeed />
    </GlobalStyle>
  );
};

export default HomePage;
