import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
      let cart = {};
      for (let i = 1; i < all_product.length + 1; i++) {
            cart[i] = 0;
      }
      return cart;
};

const ShopContextProvider = (props) => {
      const [cartItems, setCartItems] = useState(getDefaultCart());

      const addToCart = (itemId) => {
            setCartItems((prev) => ({
                  ...prev,
                  [itemId]: prev[itemId] + 1
            }));
            console.log(cartItems);
      };

      const removeToCart = (itemId) => {
            if (cartItems[itemId] > 0) {
                  setCartItems((prev) => ({
                        ...prev,
                        [itemId]: prev[itemId] - 1
                  }));
            }
      };

      const getCartTotalAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                  if (cartItems[item] > 0) {
                        let itemInfo = all_product.find((product) => product.id === Number(item));
                        totalAmount += cartItems[item] * itemInfo.new_price;
                  }
            }
            return totalAmount;
      };

      const getCartTotalItems = () => {
            let totalItems = 0;
            for (const item in cartItems) {
                  if (cartItems[item] > 0) {
                        totalItems += cartItems[item];
                  }
            }
            return totalItems;
      };

      const resetCart = () => {
            setCartItems(getDefaultCart());
      }

      const contextValue = { all_product, cartItems, addToCart, removeToCart, getCartTotalAmount, getCartTotalItems, resetCart };

      return (
            <ShopContext.Provider value={contextValue}>
                  {props.children}
            </ShopContext.Provider>
      );
};

export default ShopContextProvider;
