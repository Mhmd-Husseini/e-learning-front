import "./style.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>E-Learning</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      );
};


export default Navbar;