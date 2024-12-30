import React from "react";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <h4 className="text-xl text-blue-800 bg-gray-300 py-4 px-2">
        Spent time on read : {readingTime} min
      </h4>
      <h5 className="text-2xl font-bold mt-3">
        Bookmarks Blogs :{bookmarks.length}
      </h5>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
