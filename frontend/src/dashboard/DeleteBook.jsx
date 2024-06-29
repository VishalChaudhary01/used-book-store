import React from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../actions/productActions";

const DeleteBook = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  // console.log(userInfo);

  const { loading, error, success } = useSelector((state) => state.productDelete);
  // console.log(success)

  const handleDeleteBook = async () => {
    if (userInfo) {
      dispatch(deleteProduct(id));
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/dashboard/manage-books");
    } else {
      enqueueSnackbar(error.message, { variant: "error" }); 
      navigate("/login");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          "Yes, Delete it"
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
