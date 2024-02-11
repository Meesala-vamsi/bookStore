// RoutingContext.js
import { createContext, useContext, useState } from 'react';

const RoutingContext = createContext();

const RoutingProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [getLike,setLike] = useState([])

    const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };

    const addToLike=(like)=>{
        setLike([...getLike,like])
    }
  
    const contextValue = {
      cart,
      addToCart,
      getLike,
      addToLike
    };

  return <RoutingContext.Provider value={contextValue}>{children}</RoutingContext.Provider>;
};

const useRouting = () => {
  return useContext(RoutingContext);
};

export { RoutingProvider, useRouting };
