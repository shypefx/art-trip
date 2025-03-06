import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import destinations from "../data/destinations";

const DestinationsWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DestinationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DestinationImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
`;

const DestinationContent = styled.div`
  flex: 1;
`;

const DestinationTitle = styled.h2`
  font-size: 1.8rem;
  color: #125202;
  margin-bottom: 0.5rem;
`;

const DestinationOverview = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const DetailsLink = styled(Link)`
  color: #0a6caa;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Destinations = () => {
  return (
    <DestinationsWrapper>
      {destinations.map((destination) => (
        <DestinationCard key={destination.id}>
          <DestinationImage src={destination.image} alt={destination.title} />
          <DestinationContent>
            <DestinationTitle>{destination.title}</DestinationTitle>
            <DestinationOverview>{destination.overview}</DestinationOverview>
            <DetailsLink to={`/books/${destinationCity}`}>
              See More
            </DetailsLink>
          </DestinationContent>
        </DestinationCard>
      ))}
    </DestinationsWrapper>
  );
};

export default Destinations;
