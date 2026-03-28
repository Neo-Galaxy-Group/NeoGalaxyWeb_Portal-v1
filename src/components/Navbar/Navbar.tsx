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

    this.setMenu = this.setMenu.bind(this);
  }

  componentDidMount(): void {
    this.setMenu(false);
  }

  componentWillUnmount(): void {
    this.setMenu(false);
  }

  setMenu(open: boolean) {
    this.setState({ isOpen: open });
  }

  render() {
    const isOpen = this.state.isOpen ? "block" : "none";

    return (
      <nav className="Navbar-nav">
        <ul className="Navbar-nav-list">
          <li className="Navbar-nav-list-element">
            <div className="Navbar-nav-button">
              <a className="Navbar-nav-button-link" href="/">
                Home
              </a>
            </div> 
          </li>
          <li className="Navbar-nav-list-element">
            <div className="Navbar-nav-button" onMouseEnter={() => this.setMenu(true)} onMouseLeave={() => this.setMenu(false)}>
              I nostri progetti {isOpen == "block" ? "↑" : "↓"}
            </div>
            <ul className="Navbar-nav-list Navbar-dropdown" style={{ display: isOpen }} onMouseEnter={() => this.setMenu(true)} onMouseLeave={() => this.setMenu(false)}>
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a href="/projects/community" className="Navbar-nav-button-link">
                    Community
                  </a>
                </div>
              </li>
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a href="/projects/softwarehouse" className="Navbar-nav-button-link">
                    Software House
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
