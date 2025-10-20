import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductTile({ item }) {
  const navigate = useNavigate();

  function handleAddToCartItem(getProductId) {

    console.log(getProductId,navigate);
    navigate(`/product-details/${getProductId}`);
  }
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
      <div className="relative w-full h-52 sm:h-70 bg-gray-100">
        <img
          src={item?.thumbnail}
          alt={item?.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {item?.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {item?.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-blue-600">${item?.price}</p>
          <button onClick={()=>handleAddToCartItem(item?.id)} className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile