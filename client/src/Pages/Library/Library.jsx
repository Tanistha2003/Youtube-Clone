import React from "react";
import './Library.css';
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import vid from "../../Components/Video/vid.mp4";
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import WHLvideoList from "../../Components/WHL/WHLvideoList";

function Library(){

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

     const Currentuser = {
        result: {
            _id:1,
            name:"John",
            email: "xyz27@gmail.com",
            name: "John",
            joinedOn: "2222-07-15T09:57:23.489Z",
        },
    };

    return (
    <div className="container_Pages_App">
        <LeftSidebar />

        <div className="container2_Pages_App">
            <div className="container_libraryPage">

                <h1 className="title_container_LibraryPage">
                    <b>
                        <FaHistory />
                    </b>
                    <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                        <WHLvideoList 
                            page={"History"}
                            Currentuser={Currentuser?.result._id}
                            videoList={vids}
                        />
                </div>

            </div>

            <div className="container_libraryPage">

                <h1 className="title_container_LibraryPage">
                    <b>
                        <MdOutlineWatchLater />
                    </b>
                    <b>WatchLater</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideoList
                        page={"Watch Later"}
                        Currentuser={Currentuser?.result._id}
                        videoList={vids}
                    />
                </div>

            </div>

            <div className="container_libraryPage">

                <h1 className="title_container_LibraryPage">
                    <b>
                        <AiOutlineLike />
                    </b>
                    <b>Liked Vidoes</b>
                </h1>
                <div className="">
                    <WHLvideoList
                        page={"Liked Videos"}
                        Currentuser={Currentuser?.result._id}
                        videoList={vids}
                    />
                </div>

            </div>

        </div>

    </div>
    );
}

export default Library;