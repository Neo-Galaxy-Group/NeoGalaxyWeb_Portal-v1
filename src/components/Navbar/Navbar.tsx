import { withTranslation, type WithTranslation } from "react-i18next";
import { Component } from "react";
import "./Navbar.scss";

interface IState {
  isOpen: boolean;
  windowWidth: number;
}

interface NavbarProps extends WithTranslation {}

class Navbar extends Component<NavbarProps, IState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      isOpen: false,
      windowWidth: window.innerWidth,
    };

    this.setMenu = this.setMenu.bind(this);
  }

  componentDidMount(): void {
    this.setMenu(false);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount(): void {
    this.setMenu(false);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  setMenu(open: boolean) {
    this.setState({ isOpen: open });
  }

  render() {
    const isOpen = this.state.isOpen ? "block" : "none";
    const isMobile = this.state.windowWidth <= 500;
    const { t } = this.props;

    return (
      <nav className="Navbar-nav">
        <ul className="Navbar-nav-list">
          {!isMobile && (
            <li className="Navbar-nav-list-element">
              <div className="Navbar-nav-button">
                <a className="Navbar-nav-button-link" href="/">
                  {t("Components.Navbar.homeText")}
                </a>
              </div>
            </li>
          )}
          <li className="Navbar-nav-list-element">
            <div
              className="Navbar-nav-button"
              onClick={isMobile ? () => this.setMenu(!this.state.isOpen) : undefined}
              onMouseEnter={!isMobile ? () => this.setMenu(true) : undefined}
              onMouseLeave={!isMobile ? () => this.setMenu(false) : undefined}
            >
              <p className="Navbar-nav-button-link">
                {isMobile ? t("Components.Navbar.menuText") : t("Components.Navbar.projectsText")}{" "}
                {isOpen == "block" ? "↑" : "↓"}
              </p>
            </div>
            <ul
              className="Navbar-nav-list Navbar-dropdown"
              style={{ display: isOpen }}
              onMouseEnter={() => this.setMenu(true)}
              onMouseLeave={() => this.setMenu(false)}
            >
              {isMobile && (
                <li className="Navbar-nav-list-element">
                  <div className="Navbar-nav-button">
                    <a className="Navbar-nav-button-link" href="/">
                      {t("Components.Navbar.homeText")}
                    </a>
                  </div>
                </li>
              )}
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a
                    href="/projects/community"
                    className="Navbar-nav-button-link"
                  >
                    {t("Components.Navbar.communityText")}
                  </a>
                </div>
              </li>
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a
                    href="/projects/softwarehouse"
                    className="Navbar-nav-button-link"
                  >
                    {t("Components.Navbar.softwareHouseText")}
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

export default withTranslation()(Navbar);
