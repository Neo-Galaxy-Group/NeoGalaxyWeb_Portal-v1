import { useTranslation } from "react-i18next"

import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import "./assets/styles/pagetemplate.scss"

interface IPageTemplate {
    children: React.ReactNode;
    imgSrc: string;
    textKey: string;
}

const PageTemplate = ({children, imgSrc, textKey}: IPageTemplate) => {

    const { t } = useTranslation();

    return(
        <>
            <Header />
            <div className="page-container">
                <Card imgSrc={imgSrc} text={t(textKey)}>
                    {children}
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default PageTemplate;