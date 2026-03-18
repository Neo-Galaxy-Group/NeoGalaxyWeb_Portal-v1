import { NavLink } from "react-router-dom";
import imgLogo from '../assets/IMG/venture heart logo.png'
import gifAnimation1 from '../assets/IMG/fulmine arancione.gif'
import gifAnimation2 from '../assets/IMG/fulmine blue.gif'

const GlobalNavbar = () => {

    return(
        <>
            <section>
                <div>
                    Home
                </div>
                <div>
                    I nostri progetti {/**in secondo momento con menu a tenina */}

                    <div>
                        <p>
                            Commiunity {/**in secondo momento con menu a tenina */}
                        </p>
                        <p>
                            Softerhouse
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GlobalNavbar;