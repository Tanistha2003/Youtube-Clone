import React from "react";
import vid from "../../Components/Video/vid.mp4";
import ShowVideo from "../ShowVideo/ShowVideo";

function ShowVideoList({videoId}){

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
        <div className="Container_ShowVideoGrid">
            {
                vids?.data?.filter(q=>q._id===videoId).map(vId=>{
                    return (
                        <div key={vId._id} className="video_box_app">
                            <ShowVideo vid={vId} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ShowVideoList;