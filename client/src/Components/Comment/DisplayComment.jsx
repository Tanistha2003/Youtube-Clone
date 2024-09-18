import React, { useState } from "react";
import './Comment.css';
import moment from 'moment';

function DisplayComment({ cId, commentBody, commentOn, userCommented }) {
    const [edit, setEdit] = useState(false);
    const [cmtBdy, setcmtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");

    const CurrentUser = {
        result: {
            id: 1, // Dummy current user ID for demonstration
            email: "xyz27@gmail.com",
            name: "John",
            joinedOn: "2222-07-15T09:57:23.489Z",
        },
    };

    const handleEdit = (ctId, ctBody) => {
        setEdit(true);
        setcmtId(ctId);
        setcmtBdy(ctBody);
    }

    return (
        <>
            {edit ? (
                <form className="comments_sub_form_comments">
                    <input
                        type="text"
                        onChange={(e) => setcmtBdy(e.target.value)}
                        placeholder="Edit comment.."
                        value={cmtBdy}
                        className="comment_ibox"
                    />
                    <input
                        type="submit"
                        value="change"
                        className="comment_add_btn_comments"
                    />
                </form>
            ) : (
                <p className="comment_body">{commentBody}</p>
            )}

            <p className="usercommented">
                {" "} - {userCommented} commented {moment(commentOn).fromNow()}
            </p>

            {CurrentUser.result.id === 1 && ( // Replace 1 with dynamic ID if needed
                <p className="EditDel_DisplayCommendt">
                    <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
                    <i>Delete</i>
                </p>
            )}
        </>
    );
}

export default DisplayComment;
