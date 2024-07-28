import React from "react";
import LeftSidebar from "../../componets/leftSidebar/LeftSidebar";
import "./library.css";
import vid from "../../componets/video/vid.mp4";
import vid1 from "../../componets/video/vid1.mp4";
import vid2 from "../../componets/video/vid2.mp4";
import { FaHistory } from "react-icons/fa";
import WhlVideoList from "../../componets/whl/WhlVideoList";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

function Library() {
  const vids = [
    {
      id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c3058f",
      title: "video 1",
      uploader: "Dipika",
      description: "description of video 1",
    },
    {
      id: 2,
      video_src: vid1,
      Chanel: "cdd",
      title: "video 2",
      uploader: "Avhi",
      description: "description of video 2",
    },
    {
      id: 3,
      video_src: vid2,
      Chanel: "add",
      title: "video 3",
      uploader: "Samir",
      description: "description of video 3",
    },
    {
      id: 4,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c305",
      title: "video 4",
      uploader: "Sneha",
      description: "description of video 4",
    },
  ];
  return (
    <>
      <div className="container_pages_app">
        <LeftSidebar />
        <div className="container2_pages_app">
          <div className="library">
            <h1 className="title_library">
              <b>
                <FaHistory />
              </b>
              <b>History</b>
            </h1>
            <div className="library_video">
              <WhlVideoList page={"History"} videoList={vids} />
            </div>
          </div>
          <div className="library">
            <h1 className="title_library">
              <b>
                <MdOutlineWatchLater />
              </b>
              <b>Watch Later</b>
            </h1>
            <div className="library_video">
              <WhlVideoList page={"Watch Later"} videoList={vids} />
            </div>
          </div>
          <div className="library">
            <h1 className="title_library">
              <b>
                <AiOutlineLike />
              </b>
              <b>Liked Videos</b>
            </h1>
            <div className="library_video">
              <WhlVideoList page={"Liked Videos"} videoList={vids} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
