import { Outlet, Link } from "react-router-dom";
import StickyFooter from "../Footer/Footer";
export default function Layouts() {
  return (
    <>
      <nav className="nav-link">
      <img src={require("../../assets/img/PNG.png")} width="90px"/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Course</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
};
