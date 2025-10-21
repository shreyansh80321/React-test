import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context';

function CartTilePage({ item }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
            <img
              className="w-full h-full object-contain"
              src={item?.thumbnail}
              alt={item?.title}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-gray-800 font-semibold text-lg">
              {item?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(item, true)}
              className="bg-red-500 font-sm text-white text-xl border rounded-xl transition-colors p-1 duration-200 hover:bg-red-700 cursor-pointer px-3"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-gray-900 font-bold text-lg">
            ${item?.totalPrice?.toFixed(2)}
          </h3>
          <button
            disabled={item?.quantity===1}
            onClick={() => handleRemoveFromCart(item,false)}
            className="disabled:opacity-65 w-10 h-10 flex items-center justify-center text-xl text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            -
          </button>
          <span className="w-12 text-center text-gray-800 font-medium">
            {item?.quantity}
          </span>
          <button onClick={()=>handleAddToCart(item)} className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            +
          </button>
        </div>
      </div>
      <hr className="border-gray-500" />
    </>
  );
}

export default CartTilePage