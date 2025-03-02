// components/home/TravelCategories.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Link)`
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: white;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
  }
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CategoryInfo = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const TravelCategories = () => {
  // This would typically come from an API or props
  const categories = [
    {
      id: 1,
      title: 'Adventure Travel',
      image: '/images/adventure.jpg',
      info: '125 destinations',
      slug: 'adventure'
    },
    {
      id: 2,
      title: 'Beach Getaways',
      image: '/images/beaches.jpg',
      info: '98 destinations',
      slug: 'beaches'
    },
    {
      id: 3,
      title: 'Cultural Experiences',
      image: '/images/culture.jpg',
      info: '156 destinations',
      slug: 'culture'
    },
    {
      id: 4,
      title: 'Food & Drink',
      image: '/images/food.jpg',
      info: '82 destinations',
      slug: 'food-drink'
    },
    {
      id: 5,
      title: 'City Breaks',
      image: '/images/cities.jpg',
      info: '74 destinations',
      slug: 'cities'
    },
    {
      id: 6,
      title: 'Wildlife & Nature',
      image: '/images/wildlife.jpg',
      info: '103 destinations',
      slug: 'wildlife'
    }
  ];
  
  return (
    <Section>
      <SectionInner>
        <SectionHeader>
          <SectionTitle>Browse by Interest</SectionTitle>
          <SectionDescription>
            Find the perfect destination based on what interests you most
          </SectionDescription>
        </SectionHeader>
        
        <CategoriesGrid>
          {categories.map(category => (
            <CategoryCard key={category.id} to={`/interests/${category.slug}`}>
              <CategoryImage image={category.image} />
              <CategoryContent>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryInfo>{category.info}</CategoryInfo>
              </CategoryContent>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </SectionInner>
    </Section>
  );
};

export default TravelCategories;
