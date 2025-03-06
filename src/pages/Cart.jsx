import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { FaArrowLeft, FaTrash, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { color } from 'framer-motion';

const CartWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem;
  margin-bottom: 10rem;
  background-color: #f9f9f9;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CartTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #125202;
  text-align: center;
  border-bottom: 2px solid #125202;
  padding-bottom: 1rem;
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

const EmptyCartMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin: 3rem 0;
  color: #666;
`;

const CartItemsList = styled.div`
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const BookImageContainer = styled.div`
  width: 80px;
  flex-shrink: 0;
  margin-right: 1.5rem;
`;

const BookImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #125202;
`;

const BookDetails = styled.div`
  flex: 1;
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  color: #125202;
  margin-bottom: 0.5rem;
`;

const BookPrice = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.2s;
  
  &:hover {
    background-color: #ff3333;
    transform: rotate(90deg);
  }
`;

const CartSummary = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: ${props => props.isTotal ? 'none' : '1px solid #eee'};
  font-weight: ${props => props.isTotal ? 'bold' : 'normal'};
  font-size: ${props => props.isTotal ? '1.2rem' : '1rem'};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 8px;
  }
`;

const ClearButton = styled(ActionButton)`
  background-color: #f9f9f9;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CheckoutButton = styled(ActionButton)`
  background-color: #125202;
  color: white;
  border: none;
  box-shadow: 0 4px 8px rgba(18, 82, 2, 0.3);
  
  &:hover {
    background-color: #1a7a03;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(18, 82, 2, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(18, 82, 2, 0.3);
  }
`;

const ThankYouModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  color: #125202;
  margin-bottom: 1rem;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #125202;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
`;

const ContinueButton = styled(CheckoutButton)`
  margin: 0 auto;
`;

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useContext(CartContext);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleCheckout = () => {
    setShowThankYou(true);
    clearCart();
  };
  
  const continueShopping = () => {
    setShowThankYou(false);
    navigate('/catalogue');
  };

  return (
    <CartWrapper>
      <BackButton to="/catalogue">
        <FaArrowLeft /> Continuer mes achats
      </BackButton>
      
      <CartTitle>Votre Panier</CartTitle>
      
      {cart.length === 0 && !showThankYou ? (
        <EmptyCartMessage>
          Votre panier est vide. Rendez-vous dans notre catalogue pour découvrir nos livres !
        </EmptyCartMessage>
      ) : (
        !showThankYou && (
          <>
            <CartItemsList>
              {cart.map(item => (
                <CartItem key={item.id}>
                  <BookImageContainer>
                    <BookImage src={item.image} alt={item.title} />
                  </BookImageContainer>
                  
                  <BookDetails>
                    <BookTitle>{item.title}</BookTitle>
                    <BookPrice>{item.price}</BookPrice>
                    <QuantityControls>
                      <QuantityButton 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <p style={{ color: 'black'}}>-</p>
                        <FaMinus size={12} />
                      </QuantityButton>
                      <QuantityDisplay>{item.quantity}</QuantityDisplay>
                      <QuantityButton 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <p style={{ color: 'black'}}>+</p>
                        <FaPlus size={12} />
                      </QuantityButton>
                    </QuantityControls>
                  </BookDetails>
                  
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    <FaTrash size={16} />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItemsList>
            
            <CartSummary>
              <SummaryRow>
                <span>Nombre d'articles</span>
                <span>{getTotalItems()}</span>
              </SummaryRow>
              
              <SummaryRow>
                <span>Sous-total</span>
                <span>{getTotalPrice().toFixed(2)} €</span>
              </SummaryRow>
              
              <SummaryRow>
                <span>Frais de livraison</span>
                <span>Gratuit</span>
              </SummaryRow>
              
              <SummaryRow isTotal>
                <span>Total</span>
                <span>{getTotalPrice().toFixed(2)} €</span>
              </SummaryRow>
            </CartSummary>
            
            <ButtonsContainer>
              <ClearButton onClick={clearCart}>
                <FaTrash /> Vider le panier
              </ClearButton>
              
              <CheckoutButton onClick={handleCheckout}>
                <FaCheck /> Passer la commande
              </CheckoutButton>
            </ButtonsContainer>
          </>
        )
      )}
      
      {showThankYou && (
        <ThankYouModal>
          <ModalContent>
            <SuccessIcon>
              <FaCheck />
            </SuccessIcon>
            <ModalTitle>Merci pour votre commande !</ModalTitle>
            <ModalText>
              Votre commande a été effectuée avec succès. Vous recevrez bientôt un email de confirmation.
            </ModalText>
            <ContinueButton onClick={continueShopping}>
              Continuer mes achats
            </ContinueButton>
          </ModalContent>
        </ThankYouModal>
      )}
    </CartWrapper>
  );
};

export default Cart;
