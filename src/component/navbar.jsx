import "../styles/navbar.css";
const NavBar = () => {
  return (
    <div className="header">
      <div>
        <h1>logo</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li className="new">New Blog</li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
