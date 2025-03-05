import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import destinations from "../data/destinations";
import HorizontalCards from "../components/common/HorizontalCards";

const DetailsWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const DestinationHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const DestinationImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 20px;
`;

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === id);

  if (!destination) {
    return <p>Destination not found</p>;
  }

  // Debug: Log destination data
  console.log("Selected Destination:", destination);

  const famousPlacesData = destination.famousPlaces.map((place) => {
    console.log("Famous Place:", place.name, "Image URL:", place.image); // Log the image URL for each place
    return {
      title: place.name,
      description: place.description,
      image: place.image, // This should point to the specific image
    };
  });
  console.log("Data passed to HorizontalCards:", famousPlacesData);

  // Debug: Log the final data passed to HorizontalCards
  console.log("Data passed to HorizontalCards for Famous Places:", famousPlacesData);

  return (
    <DetailsWrapper>
      <DestinationHeader>
        <h1>{destination.title}</h1>
        <DestinationImage src={destination.image} alt={destination.title} />
        <p>{destination.overview}</p>
      </DestinationHeader>

      {/* Famous Places Section */}
      <HorizontalCards
        title="Les incontournables"
        subtitle={`Les sites emblématiques de ${destination.title}`}
        data={famousPlacesData}
      />
    </DetailsWrapper>
  );
};

export default DestinationDetails;
