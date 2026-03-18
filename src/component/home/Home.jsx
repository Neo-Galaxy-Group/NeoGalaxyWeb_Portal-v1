import { useState } from "react"
import imgLogo from '../../assets/IMG/venture heart logo.png'

const itemCarosello = [
  { id: 0, name: "Building"},
  { id: 1, name: "Skins" }
]

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    return(
        <>

            <section>
                <div>
                    logo {/**in secondo momento con animqazione e immagine */}
                </div>
            </section>
        </>
    )
}

export default Home;