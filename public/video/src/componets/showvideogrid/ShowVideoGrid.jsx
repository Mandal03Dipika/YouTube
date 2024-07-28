import React from "react";
import ShowVideo from "../showvideo/ShowVideo";
import "./showvideogrid.css";

function ShowVideoGrid({ vids }) {
  return (
    <>
      <div className="container_show_video_grid">
        {vids?.map((vi) => {
          return (
            <div className="video_box_app" key={vi.id}>
              <ShowVideo vid={vi} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowVideoGrid;
