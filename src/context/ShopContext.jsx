import React, { useState } from "react";
import allproduct from '../components/Assets/all_product'
import { createContext } from "react";

export const ShopContext = createContext(null);

const getDeafaultCart=()=>{
    let cart ={};
    for(let index=0;index<allproduct.length+1;index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const[cartItems,setCartItems] = useState(getDeafaultCart());

    // console.log(cartItems);

    const addToCart = (itemId)=>{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
          console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

    const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo = allproduct.find((product)=>product.id === Number(item))
            totalAmount+= itemInfo.new_price * cartItems[item];
        } 
    }
    return totalAmount;
  }

  const getTotalCartItems =()=>{
    let totalItem = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        totalItem+=cartItems[item];
    }
    return totalItem;
  }

  const contextValue = {getTotalCartItems,getTotalCartAmount,allproduct,cartItems,addToCart,removeFromCart};

   

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;