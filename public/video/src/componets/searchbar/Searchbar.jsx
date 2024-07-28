import React, { useState } from "react";
import "./searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListArray, setSearchListArray] = useState(false);
  const titleArray = [
    "video1",
    "video2",
    "Animation video",
    "Movies",
  ].filter((q) => q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
      <div className="searchbar_container">
        <div className="searchbar_container2">
          <div className="search_div">
            <input
              type="text"
              className="ibox_searchbar"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onClick={(e) => setSearchListArray(true)}
            />
            <FaSearch
              className="searchIcon_searchbar"
              onClick={(e) => setSearchListArray(false)}
            />
            <BsMicFill className="mic_searchbar" />
            {searchQuery && searchListArray && (
              <SearchList
                setSearchQuery={setSearchQuery}
                titleArray={titleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
