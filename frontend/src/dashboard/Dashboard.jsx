import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userInfo, loading } = useSelector((state) => state.userLogin);
  // console.log(userInfo.user.name)


  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <div className="mt-4 px-4 lg:px-24 flex justify-center flex-col items-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        { loading && <Loader />}
        <h2 className="text-4xl font-bold text-center py-4">
          Hello {userInfo.user.name}{" "}
        </h2>
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center">
              <p className="text-grey-600 mb-2">{userInfo.user.name}</p>
              <p className="text-gray-600 mb-4">{userInfo.user.email}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
