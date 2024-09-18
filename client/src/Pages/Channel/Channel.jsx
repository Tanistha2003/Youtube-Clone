import React from "react";
import DescribeChanel from "./DescribeChannel"; 
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar"; 
import { useParams } from "react-router-dom";
import vid from "../../Components/Video/vid.mp4";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";

function Channel({setEditCreateChannelBtn, setVideoUploadPage}){

    const {Cid}=useParams();
    const vids = [
           {
             _id: 1,
             video_src: vid,
             Channel: "62bafe6752cea35a6c30685f",
             title: "video 1",
             Uploder: "abc",
             description: "description of  video 1",
           },
           {
             _id: 2,
             video_src: vid,
             Channel: "cdd",
             title: "video 2",
             Uploder: "abc",
             description: "description of  video 2",
           },
           {
             _id: 3,
            video_src: vid,
             Channel: "add",
             title: "video 3",
             Uploder: "abc",
             description: "description of  video 3",
           },
           {
             _id: 4,
             video_src: vid,
             Channel: "add",
             title: "video 3",
             Uploder: "abc",
             description: "description of  video 3",
           },
        ];

    return (
    <div className="container_Pages_App">
        <LeftSideBar />
        <div className="container2_Pages_App">
            <DescribeChanel
            Cid={Cid}
            setvideouploadpage={setVideoUploadPage}
            setEditCreateChannelBtn={setEditCreateChannelBtn} />
        <ShowVideoGrid vids={vids} />
        </div>
    </div>
    );
}

export default Channel;