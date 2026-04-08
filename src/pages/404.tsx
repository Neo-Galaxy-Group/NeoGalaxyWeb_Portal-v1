import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function Page404() {

  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text" style={{ fontSize: '10rem' }} >
        {t("Components.Card.Pages.404.Line1")}
      </p>
       <p className="Pages-container-text">
        {t("Components.Card.Pages.404.Line2")}
      </p>
    </div>
  );
}

export default Page404;
