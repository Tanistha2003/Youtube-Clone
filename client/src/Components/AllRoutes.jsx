    import React from "react";
    import {Routes,Route} from "react-router-dom";
    import Home from "../Pages/Home/Home";
    import Search from "../Pages/Search/Search";
    import VideoPage from "../Pages/VideoPage/VideoPage";
    import CreateEditChannel from "../Pages/Channel/CreateEditChannel";
    import Channel from "../Pages/Channel/Channel";
    import Library from "../Pages/Library/Library";
    import LikedVideo from "../Pages/LikedVideo/LikedVideo";
    import WatchHistory from "../Pages/WatchHistory/WatchHistory";
    import WatchLater from "../Pages/WatchLater/WatchLater";
    import YourVideos from "../Pages/Your Videos/YourVideos";

    function AllRoutes({setVideoUploadPage,setEditCreateChannelBtn}){
        return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/search/:searchquery" element={<Search />} />
                <Route path="/videopage/:vidd" element={<VideoPage />} />
                <Route path="/Library" element={<Library />} />
                <Route path="/History" element={<WatchHistory />} />
                <Route path="/WatchLater" element={<WatchLater />} />
                <Route path="/YourVideos" element={<YourVideos />} />
                <Route path="/Likedvideo" element={<LikedVideo />} />
                <Route path="/channel/:id" element={<CreateEditChannel 
                    setEditCreateChannelBtn={setEditCreateChannelBtn} />}
                />  
                <Route
                 path="/chanel/:Cid"
                 element={<Channel 
                    setVideoUploadPage={setVideoUploadPage}
                    setEditCreateChannelBtn={setEditCreateChannelBtn} />}
                />
            </Routes>
        );
    }

    export default AllRoutes;