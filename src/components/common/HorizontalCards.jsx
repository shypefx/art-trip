import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 4rem auto;
    width: 90%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  padding: 0 1rem;
`;

const Card = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  scroll-snap-align: start;
  flex-shrink: 0;
`;

const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat center/cover;
  width: 100%;
  height: 150px;
`;

const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #125202;
`;

const CardDescription = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
  color: #555;
`;

const CardLink = styled(Link)`
  align-self: flex-end;
  text-decoration: none;
  color: #0a6caa;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalCards = ({ title, subtitle, data }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}

      <CardsWrapper>
        {data.map((item, index) => (
          <Card key={index}>
            {/* Pass the image prop to CardImage */}
            <CardImage image={item.image} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardLink to={`/destinations/${item.id}`}>→ Voir plus</CardLink>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default HorizontalCards;
