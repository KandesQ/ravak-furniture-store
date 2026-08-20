import "./Hero.css"

export default function Hero()
{
    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__wrapper">
                        <h1 className="hero__title">Дизайнерская сантехника Ravak</h1>
                        <p className="hero__description">Чешское качество, лаконичные формы и гарантия до 10 лет. Собрали ванную мечты — от чаши до последнего крепления.</p>
                    </div>
                    
                    <button className="hero__button">Cмотреть коллекцию</button>
                    
                </div>
                
            </div>

            <div className="hero__background"></div>
        </div>
    )
}