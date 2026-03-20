import { Component } from "react";

import "./Navbar.scss";

interface IState {
  isOpen: boolean;
}

class Navbar extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.setMenu = this.setMenu.bind(this);
  }

  componentDidMount(): void {
    this.setMenu(false);
  }

  componentWillUnmount(): void {
    this.setMenu(false);
  }

  setMenu(open: boolean)
  {
    this.setState({ isOpen: open });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="Navbar-nav">
        <ul className="Navbar-nav-list">
          <li className="Navbar-nav-element">
            <a className="Navbar-nav-element-home" href="/">
              Home
            </a>
          </li>
          <li className="Navbar-nav-element">
            <div className="Navbar-nav-element-menu" onMouseEnter={()=>this.setMenu(true)} onMouseLeave={()=>this.setMenu(false)}>
              I nostri progetti {isOpen ? "↑" : "↓"}
            </div>
            {isOpen && (
              <ul className="Navbar-nav-ProjectSelection" onMouseEnter={()=>this.setMenu(true)} onMouseLeave={()=>this.setMenu(false)}>
                <li className="Navbar-nav-ProjectSelection-element">
                  <a href="/projects/community" className="Navbar-nav-ProjectSelection-element-a">
                    Neo Galaxy Community
                  </a>
                </li>
                <li className="Navbar-nav-ProjectSelection-element">
                  <a href="/projects/softwarehouse" className="Navbar-nav-ProjectSelection-element-a">
                    Neo Galaxy Software House
                  </a>
                </li>
              </ul>
            )}
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
