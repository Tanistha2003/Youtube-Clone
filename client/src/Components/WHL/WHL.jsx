import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import './WHL.css';
import WHLvideoList from "./WHLvideoList";

function WHL({ page, videoList }) {
    const currentUser = {
        result:{
        _id: 1,
        name: "John",
        email: "xyz27@gmail.com",
        joinedOn: "2222-07-15T09:57:23.489Z"
        }
    };

    return (
        <div className="container_Pages_App">
            <LeftSideBar />
            <div className="container2_Pages_App">
                <p className="conatiner_whl">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} shown here.</b>
                    {page === "History" && 
                        <div className="clear_History_btn">Clear History</div>
                    }
                </div>
                <div className="rightSide_whl">
                    <h1>{page}</h1>
                </div>
                <div className="whl_list">
                    <WHLvideoList 
                        page={page}
                        currentUser={currentUser?.result._id}
                        videoList={videoList} 
                    />
                </div>
                </p>
            </div>
        </div>
    );
}

export default WHL;
