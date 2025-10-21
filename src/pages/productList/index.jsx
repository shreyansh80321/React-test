import React, { useContext, useMemo, useState } from 'react'
import {ShoppingCartContext} from '../../context'
import ProductTile from '../../components/productTile';

function ProductListPage() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
   const [searchQuery, setSearchQuery] = useState("");
  
  
  
   const filteredProducts = useMemo(() => {
     if (!searchQuery.trim()) return listOfProducts;
     return listOfProducts.filter((item) =>
       item.title?.toLowerCase().includes(searchQuery.toLowerCase())
     );
   }, [listOfProducts, searchQuery]);
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
        <h2 className="mb-4 text-3xl lg:text-5xl font-bold text-gray-800 tracking-tight">
          Our Featured Products
        </h2>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 lg:mt-16">
        {filteredProducts && filteredProducts?.length > 0 ? (
          filteredProducts.map((item) => <ProductTile item={item} />)
        ) : (
          <h3>No Products Found</h3>
        )}
      </div>
    </section>
  );
}

export default ProductListPage