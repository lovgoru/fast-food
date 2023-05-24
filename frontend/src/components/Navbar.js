import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-div">
        <Link to="/">Početna stranica</Link>
        <Link to="/products">Proizvodi</Link>
      </div>
    </nav>
  );
};

export default Navbar;
