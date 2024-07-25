import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product , loading } = useSelector((state) => state.productDetails)

  useEffect(() => {
    dispatch(productDetails(id));
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex justify-center items-center py-5">
      <div className="grid grid-cols-3 border drop-shadow-lg">
        <div className="col-span-1 p-4">
          <img className="h-auto w-60  object-cover " src={product.imageUrl} alt={product.name} />
          <div className="py-6 flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Add To Cart
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div className="col-span-2 py-8 flex justify-center">
          <div >
              <h5 className="py-2 text-2xl font-bold text-gray-900">
              {product.name}
              </h5>
              <div className="font-medium text-gray-700">
              <p>
                <span className="font-bold">Price:</span> Rs.{product.price}
              </p>
              <p>
                <span className="font-bold">Author:</span> {product.author}
              </p>
              <p>
                <span className="font-bold">Publish Year:</span> {product.publishYear}
              </p>
              <p>
                {product.category}
              </p>
              <p>
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
