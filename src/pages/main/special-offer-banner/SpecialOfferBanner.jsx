import "./SpecialOfferBanner.css";

import SpecialOfferImage from "../../../assets/images/SpecialOfferImage.png";
import SpecialOfferLargeImage from "../../../assets/images/SpecialOfferLargeImage.png";

export default function SpecialOfferBanner()
{
    return (
        <section className="special-offer">
                <picture>
                    <source
                        media="(max-width: 1440px)"
                        srcSet={SpecialOfferLargeImage}
                    />
                   
                   <source
                        media="(max-width: 1024px)"
                        srcSet={SpecialOfferLargeImage}
                    />
                    
                    <img
                        className="special-offer__image" 
                        src={SpecialOfferImage}
                        alt="Special offer" 
                    />
                </picture>

            <div className="special-offer__description">
                
                <div className="special-offer__description-title-wrapper">

                    <h3 className="special-offer__footnote">
                        СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
                    </h3>

                    <h2 className="special-offer__title">
                        Акриловые 
                        {" "}<br className="special-offer__title-break" />
                        ванны с пожизненной гарантией
                    </h2>

                </div>

                <button className="special-offer__button">
                    Подробнее
                </button>
            </div>
        </section>
    )
}