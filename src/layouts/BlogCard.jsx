import React from "react";

const BlogCard = ({ img, headlines, description, link }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-hoverColor ">
      <img
        src={img}
        alt="blog"
        className="w-full h-48 object-cover"
      />
      <div className="p-1 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          {headlines}
        </h2>
        <p className="text-sm text-gray-600 text-center">
          {description ||
            ""}
        </p>
        {link && (
          <div className="text-center">
            <a
              href={link}
              className="text-backgroundColor font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
