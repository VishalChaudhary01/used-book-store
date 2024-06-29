import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Header = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  // console.log("user", userInfo);



  return (
    <div>
      <Navbar fluid rounded className="bg-gray-800 rounded-none text-white">
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white md:hover:text-cyan-700">
            Used-Book-Store
          </span>
        </Link>


        {userInfo ? (
          <div>
            <Link to="/" className="text-white p-2">
              Home
            </Link>
            <Link to="/shop" className="text-white p-2">
              Shop
            </Link>
            <Link to="/dashboard/upload-book" className="text-white p-2">
              Sell a Book
            </Link>
            <Link to="/dashboard" className="text-white p-2">
              Profile
            </Link>
            <Link to="/cart" className="text-white p-2">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="text-white p-2">
              Login
            </Link>
            <Link to="/signup" className="text-white p-2">
              Signup
            </Link>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
