import React from "react";
import './VideoPage.css';
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import vid from "../../Components/Video/vid.mp4";
import LikeWatchlaterSave from "./LikeWatchlaterSaveBtns";
import Comments from "../../Components/Comment/Comment";

function VideoPage() {
  const { vidd } = useParams();
  
  // Video data array
  const vids = [
    {
      _id: 1,
      video_src: vid,
      chanel: "wvjwenfj3njfwef",
      title: "video 1",
      uploader: "abc",
      description: "Video 1 description",
      like: 10,
      views: 100,
      createdAt: "2022-07-15T09:57:23.489Z"
    },
    {
      _id: 2,
      video_src: vid,
      chanel: "wvjwenfj3njfwef",
      title: "video 2",
      uploader: "pqr",
      description: "Video 2 description",
      like: 20,
      views: 200,
      createdAt: "2022-07-16T09:57:23.489Z"
    },
    {
      _id: 3,
      video_src: vid,
      chanel: "wvjwenfj3njfwef",
      title: "video 3",
      uploader: "xyz",
      description: "Video 3 description",
      like: 30,
      views: 300,
      createdAt: "2022-07-17T09:57:23.489Z"
    },
    {
      _id: 4,
      video_src: vid,
      chanel: "wvjwenfj3njfwef",
      title: "video 4",
      uploader: "mno",
      description: "Video 4 description",
      like: 40,
      views: 400,
      createdAt: "2022-07-18T09:57:23.489Z"
    },
    {
      _id: 5,
      video_src: vid,
      chanel: "wvjwenfj3njfwef",
      title: "video 5",
      uploader: "mno",
      description: "Video 5 description",
      like: 50,
      views: 500,
      createdAt: "2022-07-19T09:57:23.489Z"
    }
  ];

  const vidNumber = parseInt(vidd, 10);
  const vv = vids.find((q) => q._id === vidNumber);

  const Currentuser = {
    result: {
      email: "xyz27@gmail.com",
      name: "John",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };

  return (
    <div className="container_videoPage">
      <div className="container2_videoPage">
        <div className="video_display_screen_videoPage">
          {/* Video player */}
          <video src={vv?.video_src} className="video_ShowVideo_videoPage" controls></video>

          <div className="video_details_videoPage">
            <div className="video_btns_title_VideoPage_cont">
              {/* Video title */}
              <p className="video_title_VideoPage">{vv?.title}</p>

              <div className="views_date_btns_VideoPage">
                <div className="view_videoPage">
                  {/* Video views and upload date */}
                  {vv?.views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                </div>

                {/* Like, Watch later, Save buttons */}
                <LikeWatchlaterSave vv={vv} vid={vidd} />
              </div>
            </div>

            {/* Channel details */}
            <Link to={'/'} className="channel_details_videoPage">
              <p className="channel_logo_videoPage">
                <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
              </p>
              <p className="channel_name_videoPage">{vv?.uploader}</p>
            </Link>

            {/* Comments section */}
            <div className="comments_VideoPage">
              <h2>
                <u>Comments</u>
              </h2>
              <Comments  videoId={vv._id}/>
            </div>
          </div>
        </div>

        {/* More videos section */}
        <div className="moreVideoBar">
          More Video
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
