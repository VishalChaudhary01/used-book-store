import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";

const ManageBooks = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  const userProducts = products?.filter((product) => product.user === userInfo.user._id);

  useEffect(() => {
    if (userInfo) {
      dispatch(listProducts());
    }
  }, [dispatch]);

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      {loading && <Loader />}
      <table className="lg:w-[1180px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              No.
            </th>
            <th scope="col" className="px-4 py-3">
              Book Name
            </th>
            <th scope="col" className="px-4 py-3">
              Author Name
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Price
            </th>
            <th scope="col" className="px-4 py-3">
              <span>Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {userProducts && userProducts.length > 0 ? (
            userProducts.map((book, index) => (
              <tr
                key={book._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{index + 1}</td>
                <td
                  scope="row"
                  className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.name}
                </td>
                <td className="px-4 py-4">{book.author}</td>
                <td className="px-4 py-4">{book.category}</td>
                <td className="px-4 py-4">{book.price}</td>
                <td className="px-4 py-4">
                  <Link
                    to={`/dashboard/update-book/${book._id}`}
                    className="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link to={`/dashboard/delete-book/${book._id}`}>
                    <button className="bg-red-600 px-2 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
