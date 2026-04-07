import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function Home() {

  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line1')}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line2')}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line3')}
      </p>
      <p className="Pages-container-textlink">
        {t('Components.Card.Pages.Home.Line4')}
      </p>
      <div className="Pages-container-links Pages-container-links-two">
        <a href="/projects/community" className="Pages-container-links-button">
          {t('Components.Card.Headers.communityTitle')}
        </a>
        <a href="/projects/softwarehouse" className="Pages-container-links-button">
          {t('Components.Card.Headers.softwareHouseTitle')}
        </a>
      </div>
    </div>
  );
}

// [ 👥 Di più sulla Community ] [ 🛠️ Di più sulla Software House ]

export default Home;
