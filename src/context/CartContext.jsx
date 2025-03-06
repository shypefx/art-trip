import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Essayer de récupérer le panier depuis le localStorage au chargement
    try {
      const localCart = localStorage.getItem('cart');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Sauvegarder le panier dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart(prevCart => {
      // Vérifier si le livre est déjà dans le panier
      const existingItem = prevCart.find(item => item.id === book.id);
      
      if (existingItem) {
        // Si c'est le cas, augmenter la quantité
        return prevCart.map(item => 
          item.id === book.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Sinon, ajouter le livre avec une quantité de 1
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === bookId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Supprimer le symbole € et convertir en nombre
      const price = parseFloat(String(item.price).replace('€', '').trim());
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
