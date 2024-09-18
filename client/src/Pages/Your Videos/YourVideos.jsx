import React from "react";
import vid from "../../Components/Video/vid.mp4";
import './YourVideo.css';
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";

function YourVideos(){
    const CurrentUser=1;
    const yourVideos = [
        {
            _id: 1,
            video_src: vid,
            chanel: "wvjwenfj3njfwef",
            title: "video 1",
            uploader: "abc",
            description: "Video 1 description"
        },
        {
            _id: 2,
            video_src: vid,
            chanel: "wvjwenfj3njfwef",
            title: "video 2",
            uploader: "pqr",
            description: "Video 2 description"
        },
        {
            _id: 3,
            video_src: vid,
            chanel: "wvjwenfj3njfwef",
            title: "video 3",
            uploader: "xyz",
            description: "Video 3 description"
        },
        {
            _id: 4,
            video_src: vid,
            chanel: "wvjwenfj3njfwef",
            title: "video 4",
            uploader: "mno",
            description: "Video 4 description"
        },
        {
            _id: 5,
            video_src: vid,
            chanel: "wvjwenfj3njfwef",
            title: "video 5",
            uploader: "mno",
            description: "Video 5 description"
        }
    ];

    return (
        <div className="container_Pages_App">
            <LeftSidebar />
            <div className="container2_Pages_App">
                <div className="container_yourvideo">
                <h1>Your Video</h1>
                {
                    CurrentUser ?(<>
                        <ShowVideoGrid vids={yourVideos} />
                    </>):<>
                    <h3>Plz Login to see Your uploded video list</h3></>
                 }
                </div>
            </div>
        </div>
    );
}

export default YourVideos;