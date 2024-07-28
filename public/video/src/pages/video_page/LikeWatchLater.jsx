import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiPlayListAddFill,
  RiHeartAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import "./likewatchlater.css";

function LikeWatchLater() {
  const [saveVideo, setSaveVideo] = useState(true);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const handleSave = () => {
    if (saveVideo) {
      setSaveVideo(false);
    } else {
      setSaveVideo(true);
    }
  };
  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
      setDislike(false);
    }
  };
  const handleDislike = () => {
    if (dislike) {
      setDislike(false);
    } else {
      setDislike(true);
      setLike(false);
    }
  };
  return (
    <>
      <div className="btns_container">
        <div className="btn">
          <BsThreeDots />
        </div>
        <div className="btn">
          <div className="like" onClick={() => handleLike()}>
            {like ? (
              <>
                <AiFillLike size={22} className="btns" />
                <b>1</b>
              </>
            ) : (
              <>
                <AiOutlineLike size={22} className="btns" />
                <b>Like</b>
              </>
            )}
          </div>
          <div className="like" onClick={() => handleDislike()}>
            {dislike ? (
              <>
                <AiFillDislike size={22} className="btns" />
              </>
            ) : (
              <>
                <AiOutlineDislike size={22} className="btns" />
              </>
            )}
            <b>Dislike</b>
          </div>
          <div className="like" onClick={() => handleSave()}>
            {saveVideo ? (
              <>
                <RiPlayListAddFill size={22} className="btns" />
                <b>Save</b>
              </>
            ) : (
              <>
                <MdPlaylistAddCheck size={22} className="btns" />
                <b>Saved</b>
              </>
            )}
          </div>
          <div className="like">
            <RiHeartAddFill size={22} className="btns" />
            <b>Thanks</b>
          </div>
          <div className="like">
            <RiShareForwardLine size={22} className="btns" />
            <b>Share</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeWatchLater;
