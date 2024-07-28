import React, { useState } from "react";
import "./comments.css";
import { useDispatch, useSelector } from "react-redux";
// import { deleteComment, editComment } from "../../actions/comment";

function DisplayComments({
  cId,
  commentBody,
  userCommented,
  userId,
  commentOn,
}) {
  const [commentBdy, setCommentBdy] = useState("");
  const [edit, setEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);
  const handleEdit = (ctId, ctBdy) => {
    setEdit(true);
    setCommentBdy(ctBdy);
    setCommentId(ctId);
  };
  const handleOnEdit = (e) => {
    e.preventDefault();
    if (!commentBdy) {
      alert("Type Your Comment");
    } else {
      //   dispatch(editComment({ id: commentId, commentBody: commentBdy }));
      setCommentBdy("");
    }
    setEdit(false);
  };
  //   const handleDel = (id) => {
  //     dispatch(deleteComment(id));
  //   };
  return (
    <>
      {edit ? (
        <>
          <form className="comments_form" onSubmit={handleOnEdit}>
            <input
              type="text"
              onChange={(e) => setCommentBdy(e.target.value)}
              placeholder="Edit Comment..."
              value={commentBdy}
              className="ibox"
            />
            <input type="submit" value="Change" className="add_btn" />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{commentBody}</p>
        </>
      )}
      <p className="user_commented">- {userCommented} commented</p>
      <div className="edit_del">
        <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
        <i>Delete</i>
      </div>
    </>
  );
}

export default DisplayComments;
