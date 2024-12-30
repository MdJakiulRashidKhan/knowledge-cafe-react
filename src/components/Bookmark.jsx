import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400 p-4 m-4 rounded-xl shadow-xl">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default Bookmark;
