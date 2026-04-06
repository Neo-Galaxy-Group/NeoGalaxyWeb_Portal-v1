import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  const creationYear = 2026;

  return (
    <footer>
      © Copyright {creationYear}{" "}{creationYear !== currentYear && ` - ${currentYear}`}
    </footer>
  );
}


export default Footer;
