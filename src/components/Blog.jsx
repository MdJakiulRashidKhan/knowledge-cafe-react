import React from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10 space-y-6">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold">{author}</p>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <small>{reading_time} min read</small>
          <button onClick={() => handleAddToBookmark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash) => (
          <span>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="block text-blue-800 underline hover:text-blue-400"
      >
        Mark Us Read
      </button>
    </div>
  );
};

export default Blog;
