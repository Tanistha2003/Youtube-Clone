import React from "react";
import './LeftSideBar.css';
import { AiFillAlipaySquare,AiOutlineHome,AiFillLike } from "react-icons/ai";
import { MdOutlineExplore,MdOutlineVideoLibrary,MdSubscriptions,MdOutlineWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";

function DrawSideBar({toggleDrawer, toggleDrawerSidebar}){
    return(
    <>
        <div className="container_DrawerLeftSidebar" style={toggleDrawerSidebar}>
            <div className="container2_DrawerLeftSidebar">
                <div className="DrawerLeftSidebar">
                    <NavLink to={'/'} className="icon_sidebar_div">
                    <p>
                        <AiOutlineHome size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                        <div className="text_sidebar_icon">
                           Home
                        </div>
                    </p>
                    </NavLink>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdOutlineExplore size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}} />
                            <div className="text_sidebar_icon">
                               Explore
                            </div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <img src={shorts} width={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}} />
                            <div className="text_sidebar_icon">
                               Shorts
                            </div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdSubscriptions size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}} />
                            <div className="text_sidebar_icon">
                               Subscriptions
                            </div>
                        </p>
                    </div>
                </div>
                <div className="libraryBtn_Drawerleftsidebars">
                    <NavLink to={'/Library'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineVideoLibrary size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                            <div className="text_sidebar_icon">
                                Library
                            </div>
                        </p>
                    </NavLink>
                    <NavLink to={'/History'} className="icon_sidebar_div">
                        <p>
                            <FaHistory size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                            <div className="text_sidebar_icon">
                                History
                            </div>
                        </p>
                    </NavLink>
                    <NavLink to={'/YourVideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillAlipaySquare size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                            <div className="text_sidebar_icon">
                               Your Videos
                            </div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchLater'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineWatchLater size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                            <div className="text_sidebar_icon">
                                Watch Later
                            </div>
                        </p>
                    </NavLink>
                    <NavLink to={'/Likedvideo'} className="icon_sidebar_div">
                        <p>
                            <AiFillLike size={22} className="icon_sidebar" style={{margin:'auto 0.7rem'}}/>
                            <div className="text_sidebar_icon">
                                Liked Videos
                            </div>
                        </p>
                    </NavLink>
                </div>
                <div className="subScriptions_lsdbar">
                    <h3>Your Subscriptions</h3>

                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>

                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>

                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>

                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>
                </div>
            </div>
          <div className="container3_DrawaerLeftSidebar" onClick={() => toggleDrawer()}>
          </div>  
        </div>
    </>
    );
}

export default DrawSideBar;