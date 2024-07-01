import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { logout } from "../actions/userActions";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();


  const handleLogout = async () => {
     try {
          dispatch(logout());
          enqueueSnackbar("Logout successful", { variant: "success" });
          navigate("/");
     } catch (error) {
          enqueueSnackbar("Unable to Logout, Please try again", { variant: "error" })
     }
  };

  return (
    <div>
      <div className="mt-4 px-4 lg:px-24 flex justify-center flex-col items-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
          <h2 className="text-4xl font-bold text-center py-4">
            Are you sure, want ot Logout
          </h2>
          <button
            onClick={handleLogout}
            type="submit"
            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
