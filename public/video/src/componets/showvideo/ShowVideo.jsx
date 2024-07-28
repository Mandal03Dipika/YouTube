import React from "react";
import "./showvideo.css";
import { Link } from "react-router-dom";
import moment from "moment";

function ShowVideo({ vid }) {
  return (
    <>
      <Link to={`${vid?.video_src}`}>
        <video src={`${vid?.video_src}`} className="video_show_video" />
      </Link>
      <div className="video_description">
        <div className="chanel_logo_app">
          <div className="fstChar_logo_app">
            {vid?.uploader?.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="video_details">
          <p className="title_vid_show_video">{vid?.title}</p>
          <pre className="vid_view_upload_time">{vid?.uploader}</pre>
          <pre className="vid_view_upload_time">
            {/* {vid?.views} views <div className="dot"></div> */}
            {/* {moment(vid?.createdat).fromNow()} */}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
