import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./Routes.jsx";
import DrawerSidebar from "./componets/leftSidebar/DrawerSidebar";
import Navbar from "./componets/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChanel from "./pages/chanel/CreateEditChanel";

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({ display: "flex" });
    } else {
      setToggleDrawerSidebar({ display: "none" });
    }
  };
  const [EditCreate, setEditCreate] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);
  return (
    <Router>
      {/* {videoUpload && <VideoUpload setVideoUpload={setVideoUpload} />} */}
      {EditCreate && <CreateEditChanel setEditCreate={setEditCreate} />}
      <Navbar setEditCreate={setEditCreate} toggleDrawer={toggleDrawer} />
      <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
      />
      <AllRoutes
        setEditCreate={setEditCreate}
        setVideoUpload={setVideoUpload}
      />
    </Router>
  );
}

export default App;
