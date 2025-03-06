import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import books from "../data/book";
import { CartContext } from "../context/CartContext";
import { FaArrowLeft, FaShoppingCart, FaPlus, FaArrowRight, FaArrowLeft as FaArrowLeftIcon, FaTimes } from "react-icons/fa";

const DetailsWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem;
  margin-bottom: 10rem;
  background-color: #f9f9f9;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #125202;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    color: #1a7a03;
    transform: translateX(-3px);
  }
  
  svg {
    margin-right: 5px;
  }
`;

const BookTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #125202;
  text-align: center;
  border-bottom: 2px solid #125202;
  padding-bottom: 1rem;
`;

// Carousel components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 3rem auto;
  max-width: 600px;
`;

// Mise à jour des styles du carrousel
const CarouselSlide = styled.div`
  display: flex;
  overflow: hidden;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5; // Fond neutre pour les images plus petites
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; // Changed from 'cover' to 'contain'
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 10px; // Add some padding
  background-color: white; // White background for smaller images
  
  &:hover {
    transform: scale(1.02);
  }
`;



const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(18, 82, 2, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(18, 82, 2, 0.9);
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CarouselDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#125202' : '#ddd'};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#125202' : '#aaa'};
  }
`;

// Modal for enlarged image
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;


// Mise à jour du style du modal pour les images plus petites
const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: #f5f5f5; // Fond neutre pour mieux voir les images
  padding: 20px;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain; // Ensures the image keeps its proportions
  display: block;
  margin: 0 auto; // Center the image
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #ffde59;
    transform: scale(1.1);
  }
`;

const BookInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookContent = styled.div``;

const InfoGroup = styled.div`
  margin-bottom: 1.5rem;
  border: 2px solid #125202;
  border-radius: 15px;
  padding: 0.6rem;
  background-color: #f9f9f9;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  color: #125202;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  background-color: #ffde59;
  color: #125202;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(18, 82, 2, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  
  &:hover {
    background-color: #ffd200;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(18, 82, 2, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(18, 82, 2, 0.3);
  }
  
  svg {
    margin-right: 8px;
  }
`;

const BookDescription = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  grid-column: span 2;
  border-left: 3px solid #125202;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const SuccessMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #125202;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fadeInOut 3s forwards;
  
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(-20px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
  }
`;

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  if (!book) {
    return <p>Book not found</p>;
  }
  
  // Get all available images
  const bookImages = [
    book.image,
    book.imageleft,
    book.imageright, // Fallback to the main image if imageExtra1 doesn't exist
  ];
  
  const handleAddToCart = () => {
    addToCart(book);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bookImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? bookImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DetailsWrapper>
      <BackButton to="/catalogue">
        <FaArrowLeft /> Retour au catalogue
      </BackButton>
      
      <BookTitle>{book.title}</BookTitle>
      
      <CarouselContainer>
        <CarouselSlide>
          <CarouselImage 
            src={bookImages[currentIndex]} 
            alt={`Image ${currentIndex + 1} de ${book.title}`} 
            onClick={openModal}
          />
        </CarouselSlide>
        <CarouselButton className="prev" onClick={prevSlide}>
          <FaArrowLeftIcon />
        </CarouselButton>
        <CarouselButton className="next" onClick={nextSlide}>
          <FaArrowRight />
        </CarouselButton>
        <CarouselIndicators>
          {bookImages.map((_, index) => (
            <CarouselDot 
              key={index} 
              active={currentIndex === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselIndicators>
      </CarouselContainer>
      
      {modalOpen && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <ModalImage 
              src={bookImages[currentIndex]} 
              alt={`Image ${currentIndex + 1} de ${book.title}`}
            />
          </ModalContent>
        </Modal>
      )}
      
      <AddToCartButton onClick={handleAddToCart}>
        <FaPlus /> Ajouter au panier
      </AddToCartButton>
      
      <BookContent>
        <BookDescription>
          <InfoLabel>Description</InfoLabel>
          <InfoText>{book.description}</InfoText>
        </BookDescription>
        
        <BookInfo>
          <InfoGroup>
            <InfoLabel>Date de parution</InfoLabel>
            <InfoText>{book.date}</InfoText>
          </InfoGroup>
          
          <InfoGroup>
            <InfoLabel>Nombre de pages</InfoLabel>
            <InfoText>{book.pages}</InfoText>
          </InfoGroup>
          
          <InfoGroup>
            <InfoLabel>ISBN</InfoLabel>
            <InfoText>{book.isbn}</InfoText>
          </InfoGroup>
          
          <InfoGroup>
            <InfoLabel>Prix</InfoLabel>
            <InfoText>{book.price}</InfoText>
          </InfoGroup>
          
          <InfoGroup>
            <InfoLabel>Format</InfoLabel>
            <InfoText>{book.format}</InfoText>
          </InfoGroup>
        </BookInfo>
      </BookContent>
      
      {showMessage && (
        <SuccessMessage>
          <FaShoppingCart /> {book.title} ajouté au panier !
        </SuccessMessage>
      )}
    </DetailsWrapper>
  );
};

export default BookDetails;
