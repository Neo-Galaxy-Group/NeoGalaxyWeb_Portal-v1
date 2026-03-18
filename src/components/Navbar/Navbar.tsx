import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Navbar.scss"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="navbar">
      <NavLink to="/">Home</NavLink>

      <div
        className="dropdown"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="dropdown-title">I nostri progetti</span>

        {open && (
          <div className="dropdown-menu">
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/softerhouse">Softerhouse</NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;