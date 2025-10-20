import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();
  async function fetchListOfProducts() {
    const apiResponse = await fetch('https://dummyjson.com/products')
    const result = await apiResponse.json();
    // if(loading)return <h1 className="m-10 font-bold text-4xl">Please wait fetching data</h1>
    if (result && result?.products) {
      setListOfProducts(result?.products)
      setLoading(false);
      // console.log(result);
    }
  }
  function handleAddToCart(getProductDeatils) {
    console.log(getProductDeatils);
    let cpyExistingCartItem = [...cartItem];
    const findIndexOfCurrentItem = cpyExistingCartItem.findIndex(
      (item) => item.id === getProductDeatils
        .id);
    console.log(findIndexOfCurrentItem);
    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItem.push({
        ...getProductDeatils,
        quantity: 1,
        totalPrice: getProductDeatils?.price,
      });
    } else {
      console.log("Already exists");
      
      // cpyExistingCartItem.push({
      //   ...getProductDeatils,
      //   quantity:})
      
    }
    console.log(cpyExistingCartItem, "cpyExistingCartItem");
    setCartItem(cpyExistingCartItem);
    localStorage.setItem('cartItem',JSON.stringify(cpyExistingCartItem));
    navigate('/cart');
    
  }
  useEffect(() => {
    fetchListOfProducts();
  },[])
  console.log(cartItem);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        productDetails,
        setProductDetails,
        setCartItem,
        handleAddToCart,
        cartItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
