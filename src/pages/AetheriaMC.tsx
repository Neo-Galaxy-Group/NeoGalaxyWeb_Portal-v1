import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function AetheriaMC() {
  
  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t('Components.Card.Pages.AetheriaMC.Line1', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.AetheriaMC.Line2', { joinArrays: ' ' })}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.AetheriaMC.Line3', { joinArrays: ' ' })}
      </p>
      <div className="Pages-container-links">
        <a href="https://community.neogalaxy.eu" className="Pages-container-links-button">
          {t('Components.Card.Pages.AetheriaMC.Link1')}
        </a>
        <a href="https://discord.gg/neogalaxy" className="Pages-container-links-button">
          {t('Components.Card.Pages.AetheriaMC.Link2')}
        </a>
      </div>
    </div>
  );
}

export default AetheriaMC;
