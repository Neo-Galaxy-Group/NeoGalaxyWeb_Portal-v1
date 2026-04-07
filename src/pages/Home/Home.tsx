import { useTranslation } from "react-i18next";

import CommunityImg from "../../assets/img/community_logo.png";
import SoftwareHouseImg from "../../assets/img/softwarehouse_logo.png";

import "./Home.scss";

function Home() {

  const { t } = useTranslation();

  return (
    <div className="Home-container">
      <p className="Home-container-text-intro">
        {t('Components.Card.Pages.Home.Line1')}
      </p>
      <br />
      <p className="Home-container-text-description">
        {t('Components.Card.Pages.Home.Line2')}
      </p>
      <br />
      <p className="Home-container-text-ecosystem">
        {t('Components.Card.Pages.Home.Line3')}
      </p>
      <br />
      <p className="Home-container-text-link">
        {t('Components.Card.Pages.Home.Line4')}
      </p>
      <div className="Home-container-links">
        <a href="/projects/community" className="Home-container-links-button">
          {t('Components.Card.Headers.communityTitle')}
        </a>
        <a href="/projects/softwarehouse" className="Home-container-links-button">
          {t('Components.Card.Headers.softwareHouseTitle')}
        </a>
      </div>
    </div>
  );
}

// [ 👥 Di più sulla Community ] [ 🛠️ Di più sulla Software House ]

export default Home;
