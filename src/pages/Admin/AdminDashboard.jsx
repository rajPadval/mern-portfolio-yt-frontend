import React from "react";
import AdminNavbar from "./components/AdminNavbar";
import CreateSkill from "./components/CreateSkill";
import CreateProject from "./components/CreateProject";
import AllSkills from "./components/AllSkills";
import AllProjects from "./components/AllProjects";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/slices/navSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const toggleNav = useSelector((state) => state.nav.toggleNav);
  const page = useSelector((state) => state.page.page);

  return (
    <div>
      <AdminNavbar />
      <GiHamburgerMenu
        onClick={() => dispatch(toggle())}
        className={`fixed text-xl text-white top-5 right-5 z-10 cursor-pointer lg:hidden ${
          toggleNav ? " hidden z-0 " : "block"
        }`}
      />
      <div className="w-full h-screen">
        {(() => {
          switch (page) {
            case "CreateSkill":
              return <CreateSkill />;
            case "CreateProject":
              return <CreateProject />;
            case "AllSkills":
              return <AllSkills />;
            case "AllProjects":
              return <AllProjects />;
            default:
              return <CreateProject />;
          }
        })()}
      </div>
    </div>
  );
};

export default AdminDashboard;
