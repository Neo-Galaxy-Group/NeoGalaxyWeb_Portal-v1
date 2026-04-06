import { withTranslation, type WithTranslation } from 'react-i18next';
import { Component } from "react";
import "./Navbar.scss";

interface IState {
  isOpen: boolean;
}

interface NavbarProps extends WithTranslation {}

class Navbar extends Component<NavbarProps, IState> {
  constructor(props: NavbarProps) {
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
    const { t } = this.props;

    return (
      <nav className="Navbar-nav">
        <ul className="Navbar-nav-list">
          <li className="Navbar-nav-list-element">
            <div className="Navbar-nav-button">
              <a className="Navbar-nav-button-link" href="/">
                {t('Components.Navbar.homeText')}
              </a>
            </div> 
          </li>
          <li className="Navbar-nav-list-element">
            <div className="Navbar-nav-button" onMouseEnter={() => this.setMenu(true)} onMouseLeave={() => this.setMenu(false)}>
              <p className="Navbar-nav-button-link">
                {t('Components.Navbar.projectsText')} {isOpen == "block" ? "↑" : "↓"}
              </p>
            </div>
            <ul className="Navbar-nav-list Navbar-dropdown" style={{ display: isOpen }} onMouseEnter={() => this.setMenu(true)} onMouseLeave={() => this.setMenu(false)}>
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a href="/projects/community" className="Navbar-nav-button-link">
                    {t('Components.Navbar.communityText')}
                  </a>
                </div>
              </li>
              <li className="Navbar-nav-list-element">
                <div className="Navbar-nav-button">
                  <a href="/projects/softwarehouse" className="Navbar-nav-button-link">
                    {t('Components.Navbar.softwareHouseText')}
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
