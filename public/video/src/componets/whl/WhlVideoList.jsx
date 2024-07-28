import React from "react";
import ShowVideoList from "../showvideolist/ShowVideoList";

function WhlVideoList({ page, currentUser, videoList }) {
  return (
    <>
      {currentUser ? (
        <>
          {videoList.map((m) => {
            return (
              <>
                <ShowVideoList videoId={m.id} key={m.id} />
              </>
            );
          })}
        </>
      ) : (
        <>
          <h2 style={{ color: "white" }}>Plz login to Watch your {page}</h2>
        </>
      )}
    </>
  );
}

export default WhlVideoList;
