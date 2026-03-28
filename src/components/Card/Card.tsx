import "./Card.scss"

interface ICard {
    children: React.ReactNode;
    imgSrc: string;
    text: string;
}

const Card = ({children, imgSrc, text}: ICard) => {
    return (
        <div className="Card-div">
            <div className="Card-div-header">
                <img src={imgSrc} alt="Neo Galaxy Logo" className="Card-div-header-image"></img>
                <h1 className="Card-div-header-text">{text}</h1>
            </div>
            <hr />
            <div className="Card-div-content">
                {children}
            </div>
        </div>
    );
}

export default Card;