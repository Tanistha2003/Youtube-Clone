import React from "react";
import './Auth.css';
import {Link} from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { googleLogout } from '@react-oauth/google';
import { useDispatch} from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";

function Auth({setEditCreateChannelBtn,setAuthBtn,user}){

    const dispatch=useDispatch();

    const logout=()=>{
        dispatch(setCurrentUser(null));
        googleLogout();
    };


    return (
    <>  
        <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
            <div className="Auth_container2">
                <p className="User_details">
                <div className="Chanel_logo_App">
                    <p className="fstChar_logo_App">
                    {user?.result.name ? (
                        <>{user?.result.name.charAt(0).toUpperCase()} </>
                         ) : (
                          <>{user?.result.email.charAt(0).toUpperCase()} </>
                        )
                    }
                    </p>
                </div>
                <div className="email_Auth">{user?.result.email}</div>
                </p>
                <div className="Auth_btns">
                    {user.result.name?(
                    <>
                    {
                        <Link to={"/channel/${user?.result._id}"} className="btn_Auth">
                        Your Channel </Link>
                    }   
                    </>)
                    :(
                        <>
                         <input type="submit" className="btn_Auth"  value="Create Your Chanel"  onClick={() => setEditCreateChannelBtn(true)} />
              
                        </>
                      
                    )}
                    <div>
                        <div className="btn_Auth" onClick={()=>logout()}>
                            <BiLogOut />
                            Log Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Auth;