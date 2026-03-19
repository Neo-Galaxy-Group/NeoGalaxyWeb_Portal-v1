import { Component } from "react";

import "./Navbar.scss";

interface IState {
  isOpen: boolean;
}

class Navbar extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
  }

  toggleDropdownMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav className="Navbar-nav">
        <ul className="Navbar-nav-list">
          <li className="Navbar-nav-element">
            <a  className="Navbar-nav-element-home" href="/">Home</a>
          </li>
          <li className="Navbar-nav-element">
            <div className="Navbar-nav-element-menu">
              <span onClick={this.toggleDropdownMenu}>
                I nostri progetti {isOpen ? "▲" : "▼"}
              </span>

              {isOpen && (
                <ul>
                  <li>
                    <a href="">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Software House
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

/*const Navbar = () => {
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
*/

export default Navbar;
