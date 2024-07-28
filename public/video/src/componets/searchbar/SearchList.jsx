import React from "react";
import "./searchList.css";
import { FaSearch } from "react-icons/fa";

function SearchList({ titleArray, setSearchQuery }) {
  return (
    <>
      <div className="container_search_list">
        {titleArray.map((m, i) => {
          return (
            <p
              key={i}
              className="title_item"
              onClick={(e) => setSearchQuery(m)}
            >
              <FaSearch />
              {m}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default SearchList;
