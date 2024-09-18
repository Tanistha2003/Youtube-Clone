import React from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import "./Home.css";
import vid from "../../Components/Video/vid.mp4";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";

function Home(){

    const vids=[
      {
        _id:1,
        video_src:vid,
        chanel:"wvjwenfj3njfwef",
        title:"video 1",
        uploader:"abc",
        description:"Video 1 description"
      },
      {
        _id:2,
        video_src:vid,
        chanel:"wvjwenfj3njfwef",
        title:"video 2",
        uploader:"pqr",
        description:"Video 2 description"
      },
      {
        _id:3,
        video_src:vid,
        chanel:"wvjwenfj3njfwef",
        title:"video 3",
        uploader:"xyz",
        description:"Video 3 description"
      },
      {
        _id:4,
        video_src:vid,
        chanel:"wvjwenfj3njfwef",
        title:"video 4",
        uploader:"mno",
        description:"Video 4 description"
      },
      {
        _id:5,
        video_src:vid,
        chanel:"wvjwenfj3njfwef",
        title:"video 5",
        uploader:"mno",
        description:"Video 5 description"
      }
    ];

    const navList=[
        "All",
        "Python",
        "Java",
        "C++",
        "Animation",
        "Movies",
        "Science",
        "Gaming",
        "Comedy"
    ];

    console.log(vids);

    return (
        <div className="container_Pages_App">
          <LeftSideBar />
          <div className="container2_Pages_App">
            <div className="navigation_Home">
              {navList.map((m) => {
                return (
                  <p key={m} className="btn_nav_home">
                    {m}
                  </p>
                );
              })}
            </div>
            <ShowVideoGrid vids={vids} />
          </div>
        </div>
      );
    
}

export default Home;