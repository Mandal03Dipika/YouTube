import React from "react";
import "./videopage.css";
import LikeWatchLater from "./LikeWatchLater";
import { useParams } from "react-router-dom";
import Comments from "../../componets/comments/Comments";

function VideoPage() {
  const vid = useParams();
  return (
    <>
      <div className="container_video_page">
        <div className="container2_video_page">
          <div className="video_display_screen">
            <video
              src={`/src/componets/video/${vid.vid}`}
              className="video_showVideo"
              controls
              //   autoPlay
            ></video>
            <div className="video_details">
              <div className="video_btns_title">
                <p className="video_tilte">Title</p>
                <div className="views_date_btns">
                  <div className="views">
                    5 views <div className="dot"></div> uploaded 1 year ago
                  </div>
                  <LikeWatchLater />
                </div>
              </div>
              <div className="chanel_details">
                <b className="chanel_logo">
                  <p>C</p>
                </b>
                <p className="chanel_name">Chanel Name</p>
              </div>
              <div className="comments">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More Video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
