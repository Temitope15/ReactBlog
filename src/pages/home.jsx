import { useState, useEffect } from "react";
import BlogList from "../component/blogList";

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      id: 0,
      title: "The glory of the sons",
      author: "Pastor Banjo Ayeka",
      content: "lorem ipsum ....",
      pages: "80 pages",
    },
    {
      id: 1,
      title: "The Simplicity of Prayer",
      author: "Pastor Banjo Ayeka",
      content: "lorem ipsum ....",
      pages: "90 pages",
    },
    {
      id: 2,
      title: "Faith Alone",
      author: "Pastor Banjo Ayeka",
      content: "lorem ipsum ....",
      pages: "70 pages",
    },
    {
      id: 3,
      title: "The Evolving Giants",
      author: "Yetunde Olagbuji",
      content: "lorem ipsum ....",
      pages: "59 pages",
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };
  useEffect(() => {
    console.log("use effect ran");
  }, []);
  return (
    <div>
      <BlogList blogs={blogs} section="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
