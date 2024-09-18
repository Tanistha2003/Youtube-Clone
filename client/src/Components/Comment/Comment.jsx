import React, { useState } from "react";
import './Comment.css';
import DisplayComment from "./DisplayComment";

function Comment({ videoId }) {
    const commentsList = [
        {
            id: 1,
            commentBody: "hello",
            userCommented: "abc",
            commentOn: new Date().toISOString()  // Dummy date for demonstration
        },
        {
            id: 2,
            commentBody: "hi",
            userCommented: "cde",
            commentOn: new Date().toISOString()  // Dummy date for demonstration
        },
        {
            id: 3,
            commentBody: "bye",
            userCommented: "xyz",
            commentOn: new Date().toISOString()  // Dummy date for demonstration
        },
        {
            id: 4,
            commentBody: "good",
            userCommented: "mno",
            commentOn: new Date().toISOString()  // Dummy date for demonstration
        },
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (CurrentUser) {
            if (!commentText) {
                alert("Please type your comment");
            } else {
                
                setCommentText("");
            }
        } else {
            alert("Please login to comment!");
        }
    }

    const [commentText, setCommentText] = useState("");
    const CurrentUser = 1;

    return (
        <>
            <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="add comment.."
                    value={commentText}
                    className="comment_ibox"
                />
                <input
                    type="submit"
                    value="add"
                    className="comment_add_btn_comments"
                />
            </form>

            <div className="display_comment_container">
                {commentsList.filter((comment) => videoId === comment.id).reverse().map((comment) => (
                    <DisplayComment
                        key={comment.id}
                        cId={comment.id}
                        commentBody={comment.commentBody}
                        commentOn={comment.commentOn}
                        userCommented={comment.userCommented}
                    />
                ))}
            </div>
        </>
    );
}

export default Comment;
