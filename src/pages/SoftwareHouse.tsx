import { useTranslation } from "react-i18next";

import "../assets/styles/pages.scss";

function SoftwareHouse() {
  const { t } = useTranslation();

  return (
    <div className="Pages-container">
      <p className="Pages-container-text">
        {t("Components.Card.Pages.SoftwareHouse.Line1", { joinArrays: " " })}
      </p>
      <p className="Pages-container-text">
        {t("Components.Card.Pages.SoftwareHouse.Line2", { joinArrays: " " })}
      </p>
      <p className="Pages-container-text">
        {t("Components.Card.Pages.SoftwareHouse.Line3", { joinArrays: " " })}
      </p>
      <div className="Pages-container-links">
        <a href="https://ngsh.neogalaxy.eu" className="Pages-container-links-button">
          {t("Components.Card.Pages.SoftwareHouse.Link1")}
        </a>
        <a href="https://discord.gg/tmR26JQSGB" className="Pages-container-links-button">
          {t("Components.Card.Pages.SoftwareHouse.Link2")}
        </a>
      </div>
    </div>
  );
}

export default SoftwareHouse;
