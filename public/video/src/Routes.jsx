import React from "react";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/library/Library";
import Home from "./pages/home/Home";
import YourVideo from "./pages/your_video/YourVideo";
import WatchHistory from "./pages/watch_history/WatchHistory";
import WatchLater from "./pages/watch_later/WatchLater";
import LikedVideos from "./pages/liked_videos/LikedVideos";
import VideoPage from "./pages/video_page/VideoPage";
import Chanel from "./pages/chanel/Chanel";

function AllRoutes({ setEditCreateChanelBtn, setVideoUpload }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/search/:Searchquery" element={<Search/>}/> */}
      <Route path="/library" element={<Library />} />
      <Route path="/yourvideo" element={<YourVideo />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/liked" element={<LikedVideos />} />
      <Route path="/src/componets/video/:vid" element={<VideoPage />} />
      <Route
        path="/chanel/:cid"
        element={
          <Chanel
            setEditCreate={setEditCreateChanelBtn}
            setVideoUpload={setVideoUpload}
          />
        }
      />
    </Routes>
  );
}

export default AllRoutes;
