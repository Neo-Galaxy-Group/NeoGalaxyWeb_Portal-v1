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
                    Community
                  </a>
                </li>
                <li className="Navbar-nav-ProjectSelection-element">
                  <a href="/projects/softwarehouse" className="Navbar-nav-ProjectSelection-element-a">
                    Software House
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

export default Navbar;
