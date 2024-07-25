import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions';

const ShopPage = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className="mt-4 px-4">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-5 sm:grid-cols-2 md:grid-colors-3 grid-cols-1">
        { loading && <Loader /> }
        { products && products.map((book) => (
          <div className="border py-4"
            key={book._id}> 
            <div className="flex justify-center">
            <img src={book.imageUrl} alt="book image" className="h-60 w-40" />
            </div>
            <div className="pl-4">
              <h5 className="text-2xl font-bold">
                <p>{book.name}</p>
              </h5>
              <p className="font-normal text-gray-700">
                <p>{book.author}</p>
              </p>
              <p className="font-normal text-gray-700">
                <p>Rs.{book.price}</p>
              </p>
            </div>
            <div className="px-4 py-2 flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Add To Cart
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
              Buy Now
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
