import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './ShowVideo.css'
function ShowVideo({vid}) {
  console.log(vid)
  return (
    <>
     <Link to={`/videopage/${vid._id}`}>
     <video src={vid.video_src} className="video_ShowVideo" />
     </Link>
     <div className='video_description'>
        <div className='Chanel_logo_App'>
            <div className='fstChar_logo_App'>
                  {vid?.uploader?.charAt(0).toUpperCase()}
            </div>
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vid?.title}</p>
            <pre className='vid_views_UploadTime'>{vid?.uploader}</pre>
            <pre className='vid_views_UploadTime'>
                {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
            </pre>

        </div>
     </div>
    </>
  )
}

export default ShowVideo;