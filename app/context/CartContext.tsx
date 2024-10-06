"use client";
import React, { createContext, useContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void; // Add this line
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If it is, update the quantity
        return prevItems.map((cartItem) =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // If not, add the new item to the cart
      return [...prevItems, item];
    });
  };

  const incrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) } // Prevent quantity below 1
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};