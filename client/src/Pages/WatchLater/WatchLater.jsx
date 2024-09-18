import React from "react";
import vid from "../../Components/Video/vid.mp4";
import WHL from "../../Components/WHL/WHL";

function WatchLater()
{
    const watchLaterVideos = [
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

    return (<WHL page={"WatchLater"} videoList={watchLaterVideos} />);
}

export default WatchLater;