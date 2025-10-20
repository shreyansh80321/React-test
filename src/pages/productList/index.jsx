import React, { useContext } from 'react'
import {ShoppingCartContext} from '../../context'
import ProductTile from '../../components/productTile';

function ProductListPage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
  console.log(listOfProducts);
  if(loading)return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 animate-pulse">
        Fetching the Products! Please wait for some time...
      </h2>
    </div>
  );
  
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 lg:px-16">
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 tracking-tight">
          Our Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 lg:mt-16">
        {listOfProducts && listOfProducts?.length > 0 ? (
          listOfProducts.map((item) => <ProductTile item={item}/>)
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </section>
  );
}

export default ProductListPage