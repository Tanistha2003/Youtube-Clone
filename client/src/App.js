
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {useState} from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import Allroutes from "../src/Components/AllRoutes";
import DrawSideBar from "../src/Components/LeftSideBar/DrawSideBar";
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import VideoUpload from './Pages/VideoUpload/VideoUpload';

function App() {

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer= () =>{
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };

  const [editcreatechannelbtn, setEditCreateChannelBtn] = useState(false);
  const [VideoUploadPage,setVideoUploadPage]=useState(false);

  return (
    <>
      <Router>

        {VideoUploadPage && (
          <VideoUpload  setVideoUploadPage={setVideoUploadPage} />
        )

        }

      {editcreatechannelbtn && (
        <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      )}
      <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggleDrawer={toggleDrawer} />
      <DrawSideBar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <Allroutes setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      </Router>
    </>
  );
}

export default App;
