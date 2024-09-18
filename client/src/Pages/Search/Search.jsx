import React from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from "../../Components/Video/vid.mp4";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function Search(){

    const {searchquery}=useParams();

    const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(searchquery.toUpperCase()))
    .reverse();

    return (
    <>
     <div className="container_Pages_App">
          <LeftSideBar />
          <div className="container2_Pages_App">
            <h2 style={{color:"white"}}>Search Results for {searchquery}...</h2>
            <ShowVideoGrid vids={vids} />
          </div>
        </div>
    </>
    );
}

export default Search;