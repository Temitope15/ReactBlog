//import necessary components
import "../styles/blogList.css";

/**
 * Bloglist - creates a lists of blog previews
 * @blogs: the array we are looping through
 * @section: props for the h2 tag, where we append a section title
 * @handleDelete: function to delete selected blog preview
 * 
 * return: the blog preview lists in jsx form
 */
const BlogList = ({ blogs, section, handleDelete }) => {
  return (
    <div className="Blog-list">
      <h2>{section}</h2>
      {blogs.map((blog) => (
        <div className="Blog-item" key={blog.id}>
          <h1>{blog.title}</h1>

          <div className="text">
            <p>{blog.content}</p>
            <p className="pages">{blog.pages}</p>
          </div>
          <div className="footer">
            <p className="author">written by: {blog.author}</p>
            <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
