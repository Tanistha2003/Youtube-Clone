import React, { useState } from "react";
import './LikeWatchlaterSave.css';
import { BsThreeDots } from "react-icons/bs";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiPlayListAddFill, RiShareForwardLine } from "react-icons/ri";

function LikeWatchlaterSave({ vv, vid }) {
  const [saveVideo, setSaveVideo] = useState(false);
  const [dislikeButton, setDislikeButton] = useState(false);
  const [likeButton, setLikeButton] = useState(false);

  const Currentuser = {
    result: {
      email: "xyz27@gmail.com",
      name: "John",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };

  const toggleLikedVideo = () => {
    if (Currentuser) {
      setLikeButton(!likeButton);
    } else {
      alert("Please Login to save video");
    }
  };

  const toggleSavedVideo = () => {
    if (Currentuser) {
      setSaveVideo(!saveVideo);
      if (saveVideo) {
        setDislikeButton(false);
      }
    } else {
      alert("Please Login to like video");
    }
  };

  const toggleDislikeVideo = () => {
    if (Currentuser) {
      setDislikeButton(!dislikeButton);
      if (!dislikeButton) {
        setLikeButton(false);
      }
    } else {
      alert("Please Login to dislike video");
    }
  };

  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>

      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={toggleLikedVideo}>
          {likeButton ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
         { /*<b>{vv.like + (likeButton ? 1 : 0)}</b> */}
        </div>

        <div className="like_videoPage" onClick={toggleDislikeVideo}>
          {dislikeButton ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>Dislike</b>
        </div>

        <div className="like_videoPage" onClick={toggleSavedVideo}>
          {saveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>Saved</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>Save</b>
            </>
          )}
        </div>

        <div className="like_videoPage">
          <>
            <RiShareForwardLine />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchlaterSave;
