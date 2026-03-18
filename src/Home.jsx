import { useState } from "react"
import imgHome from "../public/assets/img/neogalaxy_nobackground.png"
import Navbar from './components/Navbar'

const Home = () => {

    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main className="home">
                <div className="logo-container">
                    <img src={imgHome} alt="logo" className="logo" />
                </div>
            </main>

            <footer>
            </footer>
        </>
    )
}

export default Home;