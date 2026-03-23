import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import "./assets/styles/pagetemplate.scss"

interface IPageTemplate {
    children: React.ReactNode;
    imgSrc: string;
    text: string;
}

const PageTemplate = ({children, imgSrc, text}: IPageTemplate) => {
    return(
        <>
            <Header />
            <div className="page-container">
                <Card imgSrc={imgSrc} text={text}>
                    {children}
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default PageTemplate;