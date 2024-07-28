import React from "react";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import "./whl.css";
import WhlVideoList from "./WhlVideoList";
import { useDispatch, useSelector } from "react-redux";

function Whl({ page, videoList }) {
  const currentUser = useSelector((state) => state.currentuserreducer);
  const dispatch = useDispatch();
  const handleClearHistory = () => {
    // if (currentUser) {
    //   dispatch(
    //     clearHistory({
    //       userid: currentuser?.result.id,
    //     })
    //   );
    // }
    console.log("In");
  };
  return (
    <>
      <div className="container_pages_app">
        <LeftSidebar />
        <div className="container2_pages_app">
          <p className="container_whl">
            <div className="box_whl left_side">
              <b>Your {page} Shown Here</b>
              {page == "History" && (
                <div
                  className="clear_history"
                  onClick={() => handleClearHistory()}
                >
                  Clear History
                </div>
              )}
            </div>
            <div className="right_side">
              <h1>{page}</h1>
              <div className="list">
                <WhlVideoList
                  page={page}
                  currentUser={currentUser.result.id}
                  videoList={videoList}
                />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Whl;
