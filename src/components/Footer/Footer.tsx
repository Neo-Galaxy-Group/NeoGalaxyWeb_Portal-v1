import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  const creationYear = 2026;

  return (
    <footer>
      <div className="Footer-Top">
        <div className="Footer-TopLeft">
        </div>
        <div className="Footer-TopRight">
        </div>
      </div>
      <div className="Footer-Bottom">© Copyright {creationYear} {creationYear !== currentYear && ` - ${currentYear}`}</div>
    </footer>
  );
}

export default Footer;
