import React, { useState } from "react";
import "./comments.css";
import DisplayComments from "./DisplayComments";
import { useDispatch, useSelector } from "react-redux";
// import { postComment } from "../../actions/comment";

function Comments() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const currentUser = useSelector((state) => state.currrentuserreducer);
  const commentList = useSelector((state) => state.commentreducer);
  //   const commentList = [
  //     {
  //       id: 1,
  //       commentBody: "Hello",
  //       userCommented: "abc",
  //     },
  //     {
  //       id: 2,
  //       commentBody: "Hii",
  //       userCommented: "def",
  //     },
  //     {
  //       id: 3,
  //       commentBody: "Okk",
  //       userCommented: "ghi",
  //     },
  //     {
  //       id: 4,
  //       commentBody: "Hellooo",
  //       userCommented: "jkl",
  //     },
  //     {
  //       id: 5,
  //       commentBody: "Helllllllo",
  //       userCommented: "mno",
  //     },
  //   ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      if (!comment) {
        alert("Please Type Your Comment");
      } else {
        dispatch(
          postComment({
            videoId: videoId,
            userId: currentUser?.result._id,
            commentBody: comment,
            userCommented: currentUser.result.name,
          })
        );
        setComment("");
      }
    } else {
      alert("Please login to comment");
    }
  };
  return (
    <>
      <form className="comments_form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add Comment..."
          value={comment}
          className="ibox"
        />
        <input type="submit" value="add" className="add_btn" />
      </form>
      <div className="show">
        {commentList?.data
          .filter((q) => videoId === q?.videoId)
          .reverse()
          .map((m) => {
            return (
              <DisplayComments
                cId={m._id}
                userId={m.userId}
                commentBody={m.commentBody}
                commentOn={m.commentOn}
                userCommented={m.userCommented}
              />
            );
          })}
      </div>
    </>
  );
}

export default Comments;
