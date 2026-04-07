import { useTranslation } from "react-i18next";

import "../assets/styles/Pages.scss";

function Community() {
  
  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line1')}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line2')}
      </p>
      <p className="Pages-container-text">
        {t('Components.Card.Pages.Community.Line3')}
      </p>
      <div className="Pages-container-links Pages-container-links-one">
        <a href="/projects/community" className="Pages-container-links-button">
          {t('Components.Card.Pages.Community.Link')}
        </a>
      </div>
    </div>
  );
}

export default Community;
