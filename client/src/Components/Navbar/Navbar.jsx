import React, { useState,useEffect } from "react";
import './Navbar.css';
import logo from './logo.ico';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import Auth from "../../Pages/Auth/Auth";
import {login as loginAction}  from "../../actions/auth";
import { useGoogleLogin } from '@react-oauth/google';

function Navbar({ toggleDrawer, setEditCreateChannelBtn }) {
    const [authBtn, setAuthBtn] = useState(false);

    const [user,setUser]=useState({});
    const [profile,setProfile]=useState([]);

    const dispatch=useDispatch();

    console.log(profile);

    const Currentuser =useSelector(state=>state.currentUserReducer);
    console.log(Currentuser);

    const successLogin=()=>{
        if(profile) {
            dispatch(loginAction({ email: profile.email }));
        }
    };

    const login= useGoogleLogin({
        onSuccess: tokenResponse => setUser(tokenResponse),
        onError: (error) => console.log("Login Failed", error),
        scope: 'profile email',
    });
    
    console.log(user);

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                setProfile(res.data);
                successLogin();
            })
            .catch((err) => console.log(err));
        }
    }, [user])
    ;

    return (
        <>
        <div className='Container_Navbar'>
            <div className="Burger_logo_Navbar">
                <div className="Burger" onClick={() => { toggleDrawer() }}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

                <Link to={"/"} className="logo_div_Navbar">
                    <img src={logo} alt="Youtube logo, a red button with a white triangle in the middle" />
                    <p className="logo_text">YouTube</p>
                </Link>
            </div>

            <SearchBar />

            <div className="Elements">
                <RiVideoAddLine size={22} className={"video_icon"} />

                <div className="apps_Box">
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                </div>

                <IoMdNotificationsOutline size={22} className="micIcon" />
            </div>

            

            <div className="Auth">
                {Currentuser ? (
                    <div className="Channel_logo_app" onClick={() => setAuthBtn(true)}>
                    <p className="fstChar_logo_App">
                            {Currentuser.result.name ? (
                             Currentuser.result.name.charAt(0).toUpperCase()
                    ) : (
                        Currentuser.result.email.charAt(0).toUpperCase()
                     )}
                    </p>
                 </div>
                ) : (
                    <p className="Auth_Btn" onClick={() => login()}>
                        <BiUserCircle size={22} className="auth_icon" />
                            <b>Sign In</b>
                    </p>
                     )
                }
            </div>

        </div>
        {
            authBtn && 
            <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} setAuthBtn={setAuthBtn} user={Currentuser} />
        }

    </>
    );
}

export default Navbar;
