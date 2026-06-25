import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function Community() {
  
  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line1', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line2', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line3', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line4', { joinArrays: ' ' })}
      </p>
      <div className="Pages-container-links">
        <a href="https://community.neogalaxy.eu" className="Pages-container-links-button">
          {t('Components.Card.Pages.Community.Link1')}
        </a>
        <a href="https://discord.gg/neogalaxy" className="Pages-container-links-button">
          {t('Components.Card.Pages.Community.Link2')}
        </a>
        <a href="/projects/aetheriamc" className="Pages-container-links-button">
          {t('Components.Card.Pages.Community.Link3')}
        </a>
      </div>
    </div>
  );
}

export default Community;
