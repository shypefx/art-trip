// components/home/FeaturedArticles.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 4rem 2rem;
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

const ArticlesGrid = styled.div`
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

const ArticleCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ArticleImage = styled.div`
  height: 180px;
  position: relative;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const ArticleCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #0a6caa;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  
  a {
  
    text-decoration: none;
    
    &:hover {
      color: #0a6caa;
    }
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #888;
`;

const ArticleAuthor = styled.span``;

const ArticleDate = styled.span``;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2.5rem;
  color: #0a6caa;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedArticles = () => {
  // This would typically come from an API or props
  const articles = [
    {
      id: 1,
      title: 'The Ultimate Guide to Paris: Beyond the Eiffel Tower',
      excerpt: 'Discover hidden gems and local favorites in the City of Light that most tourists miss.',
      image: '/images/paris-article.jpg',
      category: 'City Guide',
      author: 'Emma Wilson',
      date: 'June 12, 2023',
      slug: 'ultimate-guide-paris'
    },
    {
      id: 2,
      title: '10 Must-Try Street Foods in Bangkok',
      excerpt: "From pad thai to mango sticky rice, here are the essential street foods to try in Thailand's capital.'",
      image: '/images/bangkok-food.jpg',
      category: 'Food & Drink',
      author: 'James Chen',
      date: 'May 28, 2023',
      slug: 'bangkok-street-foods'
    },
    {
      id: 3,
      title: 'How to Plan the Perfect Safari in Tanzania',
      excerpt: 'Everything you need to know to witness the Great Migration and Big Five in their natural habitat.',
      image: '/images/tanzania-safari.jpg',
      category: 'Adventure',
      author: 'Michael Brown',
      date: 'April 15, 2023',
      slug: 'tanzania-safari-guide'
    }
  ];
  
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Travel Stories & Tips</SectionTitle>
        <SectionDescription>
          Get inspired with our latest travel stories, tips, and expert advice
        </SectionDescription>
      </SectionHeader>
      
      <ArticlesGrid>
        {articles.map(article => (
          <ArticleCard key={article.id}>
            <ArticleImage image={article.image}>
              <ArticleCategory>{article.category}</ArticleCategory>
            </ArticleImage>
            <ArticleContent>
              <ArticleTitle>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ArticleMeta>
                <ArticleAuthor>By {article.author}</ArticleAuthor>
                <ArticleDate>{article.date}</ArticleDate>
              </ArticleMeta>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>
      
      <ViewAllLink to="/articles">
        View all articles
      </ViewAllLink>
    </Section>
  );
};

export default FeaturedArticles;
