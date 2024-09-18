import React,{useState} from "react";
import './VideoUpload.css';
import {buildStyles,CircularProgressbar} from "react-circular-progressbar";

function VideoUpload({setVideoUploadPage}){

    const Currentuser = {
        result: {
            _id:1,
            name:"John",
            email: "xyz27@gmail.com",
            name: "John",
            joinedOn: "2222-07-15T09:57:23.489Z",
        },
    };

    const [title,setTitle]=useState("");
    const [videoFile,setVideoFile]=useState("");
    const [progressBar,setProgressBar]=useState(0);
    const handleSubmit=(e)=>{
        setVideoFile(e.target.files[0]);
    };

    const uploadVideoFile=()=>{
        if(!title){
            alert("Enter title of the video!")
        }
        else if(!videoFile){
            alert("Attach the videofile!")
        }
        else if(videoFile.size>1000000){
            alert("Attch file of size less than 1kb!")
        }
        else{
            const FileData=new FormData();
            FileData.append("file",videoFile);
            FileData.append("title",title);
            FileData.append("channel",Currentuser?.result?._id);
            FileData.append("uploader",Currentuser?.result?.name);
        }
    }

    return (
    <div className="container_VidUpload">
        <input 
            type="submit"
            name="text"
            value={'X'}
            onClick={() => setVideoUploadPage(false)} 
            className="ibtn_x"
        />

        <div className="container2_VidUpload">
            <div className="ibox_div_vidupload">
                <input 
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                maxLength={30}
                placeholder="Enter the Title of the video"
                className="ibox_vidupload"
                />

                <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
                    <input 
                        type="file"
                        name="file"
                        className="ibox_vidupload"
                        style={{ fontSize: "1rem" }}
                        onChange={(e)=>setVideoFile(e)}
                    />
                </label>
            </div>

            <div className="ibox_div_vidupload">
                <input 
                    type="submit"
                    onClick={()=>uploadVideoFile()}
                    value="Upload"
                    className="ibox_vidupload btn_vidUpload"
                />
            </div>

            <div className="loader ibox_div_vidupload">
              <CircularProgressbar 
                 value={progressBar}
                 text={`${progressBar}`}
                 styles={buildStyles({
                   rotation: 0.25,
                   strokeLinecap: "butt",
                   textSize: "20px",
                   pathTransitionDuration: 0.5,
                   pathColor: `rgba(255,255,255,${progressBar / 100})`,
                   textColor: "#f88",
                   trailColor: "#adff2f",
                   backgroundColor: "#3e98c7",
                 })
                }
              />
            </div>

        </div>

    </div>
    );
}

export default VideoUpload;