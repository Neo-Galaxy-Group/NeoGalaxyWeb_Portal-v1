import { useTranslation } from "react-i18next";

import "./Home.scss";

function Home() {

  const { t } = useTranslation();

  return (
    <div className="Home-container">
      <br />
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
      <br />
    </div>
  );
}

// [ 👥 Di più sulla Community ] [ 🛠️ Di più sulla Software House ]

export default Home;
