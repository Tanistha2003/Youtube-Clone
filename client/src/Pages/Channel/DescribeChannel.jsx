import React from "react";
import './DescribeChannel.css';
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";

function DescribeChanel({ Cid,setvideouploadpage, setEditCreateChannelBtn}){

    const channel={
       
    };

    const currentChanel=channel.filter((c)=>c._id===Cid)[0];
    const CurrentUser = {
        result: {
          id: 1,
          email: "xyz27@gmail.com",
          name: "John",
          joinedOn: "2222-07-15T09:57:23.489Z",
          desc: "Description"
        },
      };

    return (
    <div className="container3_chanel">
        <div className="chanel_logo_chanel">
            <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
        </div>
        
        <div className="description_chanel">
            <p>{currentChanel?.name}</p>
            <p>{currentChanel.desc}</p>
        </div>

        {CurrentUser?.result._id===currentChanel._id && (
            <>
                <p className="editbtn_chanel" onClick={()=> setEditCreateChannelBtn(true)}>
                    <FaEdit /> 
                    <b>Edit Channel</b>  
                </p>

                <p className="uploadbtn_chanel" onClick={()=>setvideouploadpage(true)}>
                    <FaUpload />
                    <b>Upload Video</b>
                </p>
            </>
        )}
    </div>
    );
}

export default DescribeChanel;