import imgHome from "../assets/img/neogalaxylogo.png"

function Home() {
  return (
    <div className="home-container">
      <img src={imgHome} alt="Image not available" className="home-logo" />
    </div>
  );
}

export default Home;
