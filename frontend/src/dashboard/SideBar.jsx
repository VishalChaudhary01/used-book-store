import { Sidebar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
} from "react-icons/hi";
import avatar from "../assets/fav.jpg"
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SideBar() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  // console.log(userInfo)

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <Sidebar className="bg-lime-100" aria-label="Default sidebar example">
      <Sidebar.Logo img={avatar} imgAlt="Profile">
        Profile
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard" className="sidebal-link">
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
          </Link>
          <Link to="/dashboard/manage-books" className="sidebar-link">
            <Sidebar.Item icon={HiInbox}>Manage Books</Sidebar.Item>
          </Link>
          <Link to="/dashboard/upload-book" className="sidebar-link">
            <Sidebar.Item icon={HiOutlineCloudUpload}>
              Upload Book{" "}
            </Sidebar.Item>
          </Link>
          <Link to="/cart" className="sidebar-link">
            <Sidebar.Item icon={HiShoppingBag}>Cart</Sidebar.Item>
          </Link>
          <Link to="/logout" className="sidebar-link">
            <Sidebar.Item icon={HiTable}>Logout</Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBar;
