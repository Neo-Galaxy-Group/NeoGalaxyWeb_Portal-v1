import imgHome from "../assets/img/neogalaxylogo.png"

import "../assets/styles/home.scss"

function Home() {
  return (
    <div className="home-container">
      <img src={imgHome} alt="Image not available" className="home-logo" />
      <br />
      <span className="tmpText">NGSH PAGE</span>

    </div>
  );
}

export default Home;
