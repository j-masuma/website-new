import React, { createContext, useState, useContext } from "react";

// Create a context
const EcommerceContext = createContext();

// Create a provider component
const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <EcommerceContext.Provider value={{ products, setProducts }}>
      {children}
    </EcommerceContext.Provider>
  );
};

// Create a custom hook to consume the context
const useEcommerceContext = () => {
  const context = useContext(EcommerceContext);
  if (!context) {
    throw new Error(
      "useEcommerceContext must be used within a EcommerceProvider"
    );
  }
  return context;
};

export { EcommerceProvider, useEcommerceContext };
