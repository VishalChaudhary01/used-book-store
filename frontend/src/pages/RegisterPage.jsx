import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { register } from "../actions/userActions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading, userInfo } = useSelector((state) => state.userRegister);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(inputs.name, inputs.email, inputs.password));
  };

  useEffect(() => {
    if (error) {
      navigate('/signup')
      enqueueSnackbar(error, { variant: 'error' })
    }
    if (userInfo) {
      navigate('/')
      enqueueSnackbar(userInfo.message, { variant: 'success'})
    }
  }, [dispatch, error, navigate, userInfo]);


  return (
    <div className="mt-4 px-4 lg:px-24 flex justify-center flex-col items-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h2 className="text-4xl font-bold text-center py-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <label htmlFor="name" className="block">
                Name
              </label>
            </div>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="email" className="block">
                Email
              </label>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password1" className="block">
                Password
              </label>
            </div>
            <input
              id="password1"
              type="text"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign Up
          </button>
        </form>

        <div className="py-3 text-center">
          Have already an Account?{" "}
          <Link
            to={navigate ? "/login" : "/"}
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
