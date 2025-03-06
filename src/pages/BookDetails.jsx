import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import books from "../data/book";
import { CartContext } from "../context/CartContext";
import { FaArrowLeft, FaShoppingCart, FaPlus } from "react-icons/fa";

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

const BookVisualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  perspective: 2000px;
  height: 400px;
`;

const BookWrapper = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.5s ease;
  width: ${props => props.isOpen ? '60%' : '500px'};
  height: 400px;
  transition: all 1.5s ease;
`;

const BookContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${props => props.isOpen ? 'rotateY(-180deg)' : 'rotateY(0)'};
  transition: transform 1.5s ease;
`;

const BookCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background: #125202;
  transform-style: preserve-3d;
`;

const BookBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background: #125202;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
`;

const BookImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;

const BookTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #125202;
  text-align: center;
  border-bottom: 2px solid #125202;
  padding-bottom: 1rem;
`;

const BookInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ToggleButton = styled.button`
  background-color: #125202;
  color: white;
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
  
  &:hover {
    background-color: #1a7a03;
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

const AddToCartButton = styled(ToggleButton)`
  background-color: #ffde59;
  color: #125202;
  
  &:hover {
    background-color: #ffd200;
  }
`;

const BookDescription = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  grid-column: span 2;
  border-left: 3px solid #125202;
`;

const BookEdge = styled.div`
  position: absolute;
  height: 100%;
  width: 12px;
  right: ${props => props.isRight ? '-12px' : 'auto'};
  left: ${props => props.isRight ? 'auto' : '-12px'};
  top: 0;
  background-color: #125202;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.isRight ? 'left: 2px;' : 'right: 2px;'}
    width: 4px;
    height: 100%;
    background-color: #9932cc;
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
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  if (!book) {
    return <p>Book not found</p>;
  }
  
  const frontImage = book.image;
  const backImage = book.imageback;

  const toggleBook = () => {
    setIsOpen(!isOpen);
  };
  
  const handleAddToCart = () => {
    addToCart(book);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <DetailsWrapper>
      <BackButton to="/catalogue">
        <FaArrowLeft /> Retour au catalogue
      </BackButton>
      
      <BookTitle>{book.title}</BookTitle>
      
      <BookVisualContainer>
        <BookWrapper isOpen={isOpen}>
          <BookContainer isOpen={isOpen}>
            <BookCover>
              <BookImage src={frontImage} alt={`Couverture de ${book.title}`} />
              <BookEdge isRight={true} />
            </BookCover>
            <BookBack>
              <BookImage src={backImage} alt={`Dos de ${book.title}`} />
              <BookEdge isRight={false} />
            </BookBack>
          </BookContainer>
        </BookWrapper>
      </BookVisualContainer>

      <ButtonsContainer>
        <ToggleButton onClick={toggleBook}>
          {isOpen ? "Fermer le livre" : "Ouvrir le livre"}
        </ToggleButton>
        
        <AddToCartButton onClick={handleAddToCart}>
          <FaPlus /> Ajouter au panier
        </AddToCartButton>
      </ButtonsContainer>
      
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
