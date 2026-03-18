import imgHome from "../assets/img/neogalaxylogo.png"

import "../assets/styles/home.scss"

function Home() {
  return (
    <div className="home-container">
      <img src={imgHome} alt="Image not available" className="home-logo" />
    </div>
  );
}

export default Home;
