import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context';
import CartTilePage from '../../components/cartTile';
import { useNavigate } from 'react-router-dom';

function CartListPage() {
  const navigate = useNavigate();
  const { cartItem } = useContext(ShoppingCartContext);
  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Cart Page</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
          {cartItem?.length ? (
            cartItem.map((item) => <CartTilePage item={item} />)
          ) : (
            <h1 className="text-gray-500 text-lg font-medium">No item found</h1>
          )}
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Order Summary
          </h3>
          <hr className="border-gray-500 w-full" />
          <ul className="flex flex-col gap-2">
            <p className="text-xl font-semibold text-gray-800">
              Total
              <span>
                $
                {cartItem
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="flex gap-2 mt-4">
            <button
              disabled={cartItem?.length===0}
              className="disabled:opacity-65 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/product-list")}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors duration-300 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListPage