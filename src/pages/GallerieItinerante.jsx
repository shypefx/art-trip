import React, { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
  }

  input {
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #0a6caa;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #085a8d;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ImageCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const GallerieItinerante = () => {
  const [images, setImages] = useState([]); // Stores uploaded images
  const [file, setFile] = useState(null); // Tracks the file currently being uploaded

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Add the new image to the gallery
      setImages([...images, URL.createObjectURL(file)]);
      setFile(null); // Reset the file input
    }
  };

  return (
    <PageWrapper>
      <Title>Galerie Itinérante</Title>

      {/* Upload Section */}
      <UploadSection>
        <label htmlFor="upload">Téléversez une photo de votre voyage :</label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={handleFileChange}
        />
        <SubmitButton onClick={handleUpload} disabled={!file}>
          Ajouter à la galerie
        </SubmitButton>
      </UploadSection>

      {/* Display Gallery */}
      <Gallery>
        {images.map((image, index) => (
          <ImageCard key={index}>
            <img src={image} alt={`Voyage ${index + 1}`} />
          </ImageCard>
        ))}
      </Gallery>
    </PageWrapper>
  );
};

export default GallerieItinerante;
