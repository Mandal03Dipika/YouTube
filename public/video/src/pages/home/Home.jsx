import React from "react";
import "./home.css";
import LeftSidebar from "../../componets/leftSidebar/LeftSidebar";
import ShowVideoGrid from "../../componets/showvideogrid/ShowVideoGrid";
import vid from "../../componets/video/vid.mp4";
import vid1 from "../../componets/video/vid1.mp4";
import vid2 from "../../componets/video/vid2.mp4";

function Home() {
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
  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Games",
    "Comedy",
  ];
  return (
    <>
      <div className="container_pages_app">
        <LeftSidebar />
        <div className="container2_pages_app">
          <div className="navigation">
            {NavList.map((m) => {
              return (
                <p key={m} className="btn_nav">
                  {m}
                </p>
              );
            })}
          </div>
          <ShowVideoGrid vids={vids} />
        </div>
      </div>
    </>
  );
}

export default Home;
