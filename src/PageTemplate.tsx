import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

interface IPageTemplate {
    content: React.ComponentType;
}

const PageTemplate = ({content}: IPageTemplate) => {

    return(
        <>
            <Header />
            {content}
            <Footer />
        </>
    )
}

export default PageTemplate;