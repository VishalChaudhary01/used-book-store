import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product , loading } = useSelector((state) => state.productDetails)
  console.log(product)

  useEffect(() => {
    dispatch(productDetails(id));
  }, [id]);

  return (
    <div className="flex justify-center items-center py-5">
      { loading && <Loader /> }
      <Card className="max-w-sm">
        <div className="flex justify-center">
          <img className="h-64 w-auto object-cover" src={product.imageUrl} alt={product.name} />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Author:</span> {product.author}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Price:</span> Rs.{product.price}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Publish Year:</span> {product.publishYear}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {product.category}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <div className="px-6 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
        Add To Cart
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
      </div>
      </Card>
    </div>
  );
};

export default SingleBook;
