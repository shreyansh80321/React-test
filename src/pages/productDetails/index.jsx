import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetails, setProductDetails, handleAddToCart,cartItem } =
    useContext(ShoppingCartContext);
  // console.log(params);
  async function getProductDeatils() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    if (result) {
      console.log(result);
      setProductDetails(result)
      // setProductDetails(result);
    }
  }

  useEffect(() => {
    getProductDeatils();
  },[id])
  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-10 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full lg:w-[400px] h-96 bg-gray-100 rounded-xl overflow-hidden mx-auto lg:mx-0">
            <img
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto lg:flex-row lg:gap-4">
            {productDetails?.images?.length
              ? productDetails?.images.map((item) => (
                  <div className="w-20 h-20 flex-shrink-0 border rounded-lg overflow-hidden cursor-pointer transition-transform duration-200">
                    <img className="w-full h-full object-cover" src={item} />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            {productDetails?.title}
          </h1>
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-800">
              ${productDetails?.price}
            </p>
          </div>
          <div>
            <button
              disabled={cartItem.findIndex(item=>item?.id===productDetails?.id)>-1}
              onClick={() => handleAddToCart(productDetails)}
              className="disabled:opacity-65 bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage