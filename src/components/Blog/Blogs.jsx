import React from "react";
import BlogCard from "../../layouts/BlogCard";
import Button from "../../layouts/Button";
import img1 from "../../assets/blogs/blog1.jpg";
import img2 from "../../assets/blogs/blog2.jpg";
import img3 from "../../assets/blogs/blog3.jpg";
import img4 from "../../assets/blogs/blog4.jpg";
import img5 from "../../assets/blogs/blog5.jpg";
import img6 from "../../assets/blogs/blog6.jpg";

const Blogs = () => {
  return (
    <section id="blog" className="-mt-24 min-h-screen bg-[#f9f9f9] py-1 px-1 lg:px-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Latest Posts</h1>
          <p className="mt-1 text-gray-600">
            Stay informed with our expert articles on health, fitness, and wellness.
          </p>
        </div>
        <Button title="Our Articles" />
      </div>

      {/* Blog Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
        <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
        <BlogCard img={img3} headlines="Understanding Pediatric Vaccinations" />
        <BlogCard img={img4} headlines="Navigating Mental Health" />
        <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
        <BlogCard img={img6} headlines="Skin Health 101" />
      </div>
    </section>
  );
};

export default Blogs;
