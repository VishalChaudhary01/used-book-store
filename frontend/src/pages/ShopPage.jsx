import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from "flowbite-react";
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions';

const ShopPage = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-colors-3 grid-cols-1">
        { loading && <Loader /> }
        {
        products && products.map((book) => (
          <Card key={book._id}>
            <img src={book.imageUrl} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gap-900 dark:text-white">
              <p>{book.name}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{book.author}</p>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>Rs.{book.price}</p>
            </p>
            <button className="bg-blue-700 font-semibold text-white py-1 rounded">
              Add to Cart
            </button>
            <button className="bg-blue-700 font-semibold text-white py-1 rounded">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
