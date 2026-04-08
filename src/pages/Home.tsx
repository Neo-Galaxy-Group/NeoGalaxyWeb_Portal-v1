import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function Home() {

  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line1', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line2' , { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Home.Line3', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-textlink">
        {t('Components.Card.Pages.Home.Line4', { joinArrays: ' ' })}
      </p>
      <div className="Pages-container-links">
        <a href="/pages/story" className="Pages-container-links-button">
          {t('Components.Card.Headers.storyTitle')}
        </a>
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

export default Home;
